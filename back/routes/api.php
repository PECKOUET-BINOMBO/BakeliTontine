<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register', [UserController::class, 'register'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');

Route::get('/users', [UserController::class, 'index'])->name('users');

Route::middleware('auth:api')->group(function () {
    Route::get('/user', [UserController::class, 'show'])->name('user');
    Route::post('/user', [UserController::class, 'update'])->name('user.update');
    Route::post('/logout', [UserController::class, 'logout'])->name('logout');
});

