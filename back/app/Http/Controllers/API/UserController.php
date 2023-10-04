<?php

namespace App\Http\Controllers\API;

use Carbon\Carbon;
use App\Models\User;
use App\Mail\RegisterMail;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();

        if ($users->isEmpty()) {
            return response()->json([
                'message' => 'Aucun utilisateur n\'est enregistré',
            ], 404);
        }

        return response()->json([
            'message' => 'Utilisateurs récupérés avec succès',
            'users' => $users,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {


        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'profession' => 'required|string|max:255',
            'telephone' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'organisation' => 'required|string|max:255',
            'email' => 'required|string|email:rfc,dns|max:255|unique:users',
            'password' => 'required|string|min:4', //|confirmed
            'password_confirmation' => 'required|string|min:4|same:password',

        ]);

        $user = User::create([
            'name' => $request->nom,
            'prenom' => $request->prenom,
            'role' => $request->role,
            'date_naissance' => $request->date_naissance,
            'profession' => $request->profession,
            'telephone' => $request->telephone,
            'adresse' => $request->adresse,
            'organisation' => $request->organisation,
            'email' => $request->email,
            'password' => bcrypt($request->password),

        ]);

        $mailData = [
            'title' => ' Félicitations et Bienvenue sur Bakeli Tontinne',
            'body' => 'Cher ' . $request->prenom . ' ' . $request->nom . ',',
            'email' => $request->email,
            'password' => $request->password,
            'lien' => 'http://localhost:3000/login',
        ];

        Mail::to($request->email)->send(new RegisterMail($mailData));

        return response()->json([
            'message' => 'Utilisateur créé avec succès',
            'user' => $user,
        ]);
    }

    /**
     * Login user and create token
     */
    public function login(Request $request)
    {
        // Validation des données
        $request->validate([
            'email' => 'required|string|email:rfc,dns|max:255',
            'password' => 'required|string|min:4',
        ]);

        // Vérification de l'existence de l'utilisateur à partir de son email
        $user = User::where('email', $request->email)->first();

        // Vérification du mot de passe de l'utilisateur selon l'email
        if ($user && Hash::check($request->password, $user->password)) {

            // Création du jeton
            $token = $user->createToken('authToken', ['*'])->accessToken; // Crée un jeton d'accès avec tous les privilèges

            //$expiresAt = Carbon::now()->addHour(); // Définit l'heure d'expiration à 1 heure à partir de maintenant
            //$expiresAt = Carbon::now()->addSecond(30); // Définit l'heure d'expiration à 30 secondes à partir de maintenant
            $expiresAt = Carbon::now()->addMinute(1); // Définit l'heure d'expiration à 30 minutes à partir de maintenant
            //$expiresAt = Carbon::now()->addDay(30); // Définit l'heure d'expiration à 30 jours à partir de maintenant
            //$expiresAt = Carbon::now()->addMonth(30); // Définit l'heure d'expiration à 30 mois à partir de maintenant
            //$expiresAt = Carbon::now()->addYear(30); // Définit l'heure d'expiration à 30 années à partir de maintenant



            // Mettez à jour l'heure d'expiration du jeton dans la base de données
            DB::table('oauth_access_tokens')
                ->where('user_id', $user->id)
                ->update([
                    'expires_at' => $expiresAt,
                ]);

            // Retourne le token et l'utilisateur connecté
            return response()->json([
                'message' => 'Connexion réussie',
                'user' => $user,
                'token' => $token,
                'expires_at' => $expiresAt,
            ], 200);
        }

        // Retourne un message d'erreur si l'utilisateur n'existe pas ou si le mot de passe est incorrect
        return response()->json([
            'message' => 'Identifiants incorrects',
        ], 401);
    }




    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json([
                'message' => 'Token manquant ou invalide',
            ], 401);
        }



        $user = Auth::guard('api')->user();

        if (!$user) {
            return response()->json([
                'message' => 'Utilisateur introuvable',
            ], 404);
        }


        return response()->json([
            'message' => 'Utilisateur récupéré avec succès',
            'user' => $user,
            'token' => $request->bearerToken(),

        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // Vérifiez d'abord le token et l'utilisateur
        $token = $request->bearerToken();
        //401
        if (!$token) {
            return response()->json([
                'message' => 'Token manquant ou invalide',
            ], 401);
        }
        //404
        $user = Auth::guard('api')->user();

        if (!$user) {
            return response()->json([
                'message' => 'Utilisateur introuvable',
            ], 404);
        }
        //405
        if ($request->method() != 'POST') {
            return response()->json([
                'message' => 'Méthode non autorisée',
            ], 405);
        }

        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            //'role' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'profession' => 'required|string|max:255',
            'telephone' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'organisation' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'required|string|confirmed|min:4',
        ]);

        $user->update([
            'name' => $request->nom,
            'prenom' => $request->prenom,
            //'role' => $request->role,
            'date_naissance' => $request->date_naissance,
            'profession' => $request->profession,
            'telephone' => $request->telephone,
            'adresse' => $request->adresse,
            'organisation' => $request->organisation,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);


        return response()->json([
            'message' => 'Utilisateur mis à jour avec succès',
            'name' => $request->names,
            'prenom' => $request->prenom,
            'date_naissance' => $request->date_naissance,
            'profession' => $request->profession,
            'telephone' => $request->telephone,
            'adresse' => $request->adresse,
            'organisation' => $request->organisation,
            'email' => $request->email,
        ], 200);
    }


    /**
     * Logout user (Revoke the token)
     */
    public function logout(Request $request)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json([
                'message' => 'Token manquant ou invalide',
            ], 401);
        }

        $user = Auth::guard('api')->user();

        if (!$user) {
            return response()->json([
                'message' => 'Utilisateur introuvable',
            ], 404);
        }

        // Révoque tous les tokens de l'utilisateur actuel
        $user->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json([
            'message' => 'Déconnexion réussie',
        ], 200);
    }
}
