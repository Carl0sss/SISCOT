<?php

use App\Http\Controllers\Api\CotizacionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VentasController;
use App\Http\Controllers\Api\DetallesVentaController;
use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\ProductoController;
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


Route::controller(VentasController::class)->group(function(){
    Route::get('/ventas','index');
    Route::post('/venta','store');
    Route::get('/venta/{id}','show');
    Route::put('/venta/{id}','update');
    Route::delete('/venta/{id}','destroy');
    Route::get('/ventalast','last');

});

Route::controller(CotizacionController::class)->group(function(){
    Route::get('/cotizaciones','index');
    Route::post('/cotizacion','store');
    Route::get('/cotizacion/{id}','show');
    Route::put('/cotizacion','update');
    Route::delete('/cotizacion/{id}','destroy');

});
Route::controller(DetallesVentaController::class)->group(function(){
    Route::get('/detalleventa','index');
    Route::post('/detalleventa','store');
    Route::get('/detalleventa/{id}','show');
    Route::put('/detalleventa/{id}','update');
    Route::delete('/detalleventa/{id}','destroy');
});
Route::controller(ClienteController::class)->group(function(){
    Route::get('/clientes','index');
});
Route::controller(ProductoController::class)->group(function(){
    Route::get('/productos','index');
});