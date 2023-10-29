<?php

use App\Http\Controllers\Api\ClienteController;
use App\Http\Controllers\Api\CotizacionController;
use App\Http\Controllers\Api\DetalleCotizacionController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\MateriasPrimasController;
use App\Http\Controllers\Api\InvProductoController;
use App\Http\Controllers\Api\VentasController;
use App\Http\Controllers\Api\DetallesVentaController;
use App\Http\Controllers\Api\PedidoController;
use App\Http\Controllers\Api\InvMateriasPrimaController;
use App\Http\Controllers\Api\TipoProductoController;
use App\Http\Controllers\Api\ProveedoreController;
use App\Http\Controllers\Api\CategoriaMateriasPrimaController;
use App\Http\Controllers\Api\DetallePedidoController;
use App\Http\Controllers\Api\ProcesoPedidoController;
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

Route::controller(TipoProductoController::class)->group(function () {
    Route::get('/tipoproducto', 'index');
});
Route::controller(ProveedoreController::class)->group(function () {
    Route::get('/proveedor', 'index');
});
Route::controller(CategoriaMateriasPrimaController::class)->group(function () {
    Route::get('/categoriamp', 'index');
});

Route::controller(VentasController::class)->group(function () {
    Route::get('/ventas', 'index');
    Route::post('/venta', 'store');
    Route::get('/venta/{id}', 'show');
    Route::put('/venta/{id}', 'update');
    Route::delete('/venta/{id}', 'destroy');
    Route::get('/ventalast', 'last');
});
/* Routes for Pedidos, Details and Procedures */
Route::controller(PedidoController::class)->group(function () {
    Route::get('/pedidos', 'index');
    Route::post('/pedido', 'store');
    Route::get('/pedido/{id}', 'show');
    Route::put('/pedido/{id}', 'update');
    Route::put('/pedidoUpdateState/{id}', 'updateState');
    Route::delete('/pedido/{id}', 'destroy');
});

Route::controller(DetallePedidoController::class)->group(function () {
    Route::get('/detallesPedidos', 'index');
    Route::post('/detallesPedido', 'store');
    Route::get('/detallesPedido/{id}', 'show');
    Route::put('/detallesPedido/{id}', 'update');
    Route::put('/detallesPedidoUpdateState/{id}', 'updateState');
    Route::delete('/detallesPedido/{id}', 'destroy');
});

Route::controller(ProcesoPedidoController::class)->group(function () {
    Route::get('/procesoPedidos', 'index');
    Route::post('/procesoPedido', 'store');
    Route::get('/procesoPedido/{id}', 'show'); //send idPedido no idProceso
    Route::put('/procesoPedido/{id}', 'update'); //send idPedido no idProceso
    Route::delete('/procesoPedido/{id}', 'destroy');
});

Route::controller(CotizacionController::class)->group(function () {
    Route::get('/cotizaciones', 'index');
    Route::post('/cotizacion', 'store');
    Route::get('/cotizacion/{id}', 'show');
    Route::put('/cotizacion/{id}', 'update');
    Route::delete('/cotizacion/{id}', 'destroy');
});
Route::controller(DetallesVentaController::class)->group(function () {
    Route::get('/detalleventa', 'index');
    Route::post('/detalleventa', 'store');
    Route::get('/detalleventa/{id}', 'show');
    Route::put('/detalleventa/{id}', 'update');
    Route::delete('/detalleventa/{id}', 'destroy');
});

/* 
Routes for detalleCotizaciones
*/
Route::controller(DetalleCotizacionController::class)->group(function () {
    Route::get('/detalleCotizaciones', 'index');
    Route::post('/detalleCotizacion', 'store');
    Route::get('/detalleCotizacion/{id}', 'show');
    Route::put('/detalleCotizacion/{id}', 'update');
    Route::delete('/detalleCotizacion/{id}', 'destroy');
});
/* 
Routes for produtos
*/
Route::controller(ProductoController::class)->group(function () {
    Route::get('/productos', 'index');
    Route::post('/producto', 'store');
    Route::get('/producto/{id}', 'show');
    Route::put('/producto/{id}', 'update');
    Route::delete('/producto/{id}', 'destroy');
});

/* 
Routes for clientes
*/
Route::controller(ClienteController::class)->group(function () {
    Route::get('/clientes', 'index');
    Route::post('/cliente', 'store');
    Route::get('/cliente/{id}', 'show');
    Route::put('/cliente/{id}', 'update');
    Route::delete('/cliente/{id}', 'destroy');
});

Route::controller(MateriasPrimasController::class)->group(function () {
    Route::get('/materiasprimas', 'index');
    Route::post('/materiasprima', 'store');
    Route::get('/materiasprima/{id}', 'show');
    Route::put('/materiasprima/{id}', 'update');
    Route::delete('/materiasprima/{id}', 'destroy');
});

Route::controller(InvProductoController::class)->group(function () {
    Route::get('/inventarios', 'index');
    Route::post('/inventario', 'store');
    Route::get('/inventario/{id}', 'show');
    Route::put('/inventario/{id}', 'update');
    Route::delete('/inventario/{id}', 'destroy');
});

Route::controller(InvMateriasPrimaController::class)->group(function () {
    Route::get('/inventariosmp', 'index');
    Route::post('/inventariomp', 'store');
    Route::get('/inventariomp/{id}', 'show');
    Route::put('/inventariomp/{id}', 'update');
    Route::delete('/inventariomp/{id}', 'destroy');
});
