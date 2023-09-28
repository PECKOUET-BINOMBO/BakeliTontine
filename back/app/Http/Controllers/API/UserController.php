<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

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
            //'role' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'profession' => 'required|string|max:255',
            'telephone' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'organisation' => 'required|string|max:255',
            'email' => 'required|string|email:rfc,dns|max:255|unique:users',
            'password' => 'required|string|min:4',//|confirmed
            'password_confirmation' => 'required|string|min:4|same:password',
        ]);

        $user = User::create([
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
            'message' => 'Utilisateur créé avec succès',
            'user' => $user,
        ]);
    }

    /**
     * Login user and create token
     */
    public function login(Request $request)
    {
        // validation des données
        $request->validate([
            'email' => 'required|string|email:rfc,dns|max:255',
            'password' => 'required|string|min:4',
        ]);
//verification de l'existence de l'utilisateur à partir de son email
        $user = User::where('email', $request->email)->first();
//verification du mot de passe de l'utilisateur selon l'email
        if ($user && Hash::check($request->password, $user->password)) {
//creation du token
            $token = $user->createToken('authToken')->accessToken;
//retourne le token et l'utilisateur connecté
            return response()->json([
                'message' => 'Connexion réussie',
                'user' => $user,
                'token' => $token,
            ], 200);
        }
//retourne un message d'erreur si l'utilisateur n'existe pas ou si le mot de passe est incorrect
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
