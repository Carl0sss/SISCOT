<?php

use App\Http\Controllers\Api\CotizacionController;
use App\Http\Controllers\Api\MateriasPrimasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(CotizacionController::class)->group(function(){
    Route::get('/cotizaciones','index');
    Route::post('/cotizacion','store');
    Route::get('/cotizacion/{id}','show');
    Route::put('/cotizacion','update');
    Route::delete('/cotizacion/{id}','destroy');
});
Route::controller(MateriasPrimasController::class)->group(function(){
    Route::get('/materiasprimas','index');
    Route::post('/materiasprima','store');
    Route::get('/materiasprima/{id}','show');
    Route::put('/materiasprima/{id}','update');
    Route::delete('/materiasprima/{id}','destroy');
});
