<?php

use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\PagesController;
use App\Http\Controllers\TheatreController;
use App\Http\Controllers\BookingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::get('/login', [PagesController::class, 'login'])->name('login');
});

Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('/', [PagesController::class, 'home'])->name('home');

    // booking
    Route::post('/booking/store', [BookingController::class, 'store'])->name('booking.store');
    Route::post('/booking/submit', [BookingController::class, 'submit'])->name('booking.submit');


    // admin Panel
    Route::middleware(['isAdmin'])->group(function() {
        Route::group(['as' => 'admin.'], function() {
            Route::resource('/admin/theatre', TheatreController::class);

            Route::get('/booking/index', [BookingController::class, 'index'])->name('booking.index');
            Route::get('/booking/clear-all', [BookingController::class, 'clearAll'])->name('booking.clear.all');
        });
    });
});




require __DIR__.'/auth.php';
