<?php

use App\Http\Controllers\Api\CotizacionController;
use App\Http\Controllers\Api\DetalleCotizacionController;
use App\Http\Controllers\Api\ProductoController;
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

/* 
Routes for cotizaciones
*/
Route::controller(CotizacionController::class)->group(function(){
    Route::get('/cotizaciones','index'); 
    Route::post('/cotizacion','store');
    Route::get('/cotizacion/{id}','show');
    Route::put('/cotizacion/{id}','update');
    Route::delete('/cotizacion/{id}','destroy');
});
/* 
Routes for detalleCotizaciones
*/
Route::controller(DetalleCotizacionController::class)->group(function(){
    Route::get('/detalleCotizaciones','index');
    Route::post('/detalleCotizacion','store');
    Route::get('/detalleCotizacion/{id}','show');
    Route::put('/detalleCotizacion/{id}','update');
    Route::delete('/detalleCotizacion/{id}','destroy');
});
/* 
Routes for produtos
*/
Route::controller(ProductoController::class)->group(function(){
    Route::get('/productos','index');
    Route::post('/producto','store');
    Route::get('/producto/{id}','show');
    Route::put('/producto/{id}','update');
    Route::delete('/producto/{id}','destroy');
});
