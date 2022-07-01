<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BookingsController;

Route::get('/', function () {
    return view('welcome');
});

