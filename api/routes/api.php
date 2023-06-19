<?php

use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\CotizacionController;
use App\Http\Controllers\Api\DetalleCotizacionController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\MateriasPrimasController;
use App\Http\Controllers\Api\InvProductoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VentasController;
use App\Http\Controllers\Api\DetallesVentaController;

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

Route::controller(PedidoController::class)->group(function(){
    Route::get('/pedidos','index');
    Route::post('/pedido','store');
    Route::get('/pedido/{id}','show');
    Route::put('/pedido/{id}','update');
    Route::delete('/pedido/{id}','destroy');
});

Route::controller(CotizacionController::class)->group(function(){
    Route::get('/cotizaciones','index'); 
    Route::post('/cotizacion','store');
    Route::get('/cotizacion/{id}','show');
    Route::put('/cotizacion/{id}','update');
    Route::delete('/cotizacion/{id}','destroy');

});
Route::controller(DetallesVentaController::class)->group(function(){
    Route::get('/detalleventa','index');
    Route::post('/detalleventa','store');
    Route::get('/detalleventa/{id}','show');
    Route::put('/detalleventa/{id}','update');
    Route::delete('/detalleventa/{id}','destroy');
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

/* 
Routes for clientes
*/
Route::controller(ClienteController::class)->group(function(){
    Route::get('/clientes','index');
    Route::post('/cliente','store');
    Route::get('/cliente/{id}','show');
    Route::put('/cliente/{id}','update');
    Route::delete('/cliente/{id}','destroy');
});

Route::controller(MateriasPrimasController::class)->group(function(){
    Route::get('/materiasprimas','index');
    Route::post('/materiasprima','store');
    Route::get('/materiasprima/{id}','show');
    Route::put('/materiasprima/{id}','update');
    Route::delete('/materiasprima/{id}','destroy');
});

Route::controller(InvProductoController::class)->group(function(){
    Route::get('/inventarios','index');
    Route::post('/inventario','store');
    Route::get('/inventario/{id}','show');
    Route::put('/inventario/{id}','update');
    Route::delete('/inventario/{id}','destroy');
});

