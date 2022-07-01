<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BookingsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Bookings',[BookingsController::class, 'read']);
Route::post('/Bookings',[BookingsController::class, 'create']);
Route::put('/Bookings/{id}',[BookingsController::class, 'update']);
Route::delete('/Bookings/{id}',[BookingsController::class, 'delete']);