<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DetallesVenta;
use Illuminate\Http\Request;

class DetallesVentaController extends Controller
{
    public function index()
    {
        $ventas = DetallesVenta::all();
        return $ventas;
    }

    /**
     * Almacena un registro nuevo.
     */
    public function store(Request $request)
    {
        $detalle = new DetallesVenta();
        $detalle->ID_VENTA = $request->ID_VENTA;
        $detalle->ID_PRODUCTO = $request->ID_PRODUCTO;
        $detalle->CANTIDA_PRODUCTO = $request->CANTIDA_PRODUCTO;
        $detalle->SUBTOTAL_PRODUCTO = $request->SUBTOTAL_PRODUCTO;
        $detalle->save();
    }

    /**
     * Muestra un registro especifico.
     */
    public function show($id)
    {
        $detalle = DetallesVenta::find($id);
        return $detalle;
    }

    /**
     * Actualiza un registro especifico.
     */
    public function update(Request $request,$id)
    {
        $detalle = DetallesVenta::findOrFail($request->id);
        $detalle->ID_VENTA = $request->ID_VENTA;
        $detalle->ID_PRODUCTO = $request->ID_PRODUCTO;
        $detalle->CANTIDA_PRODUCTO = $request->CANTIDA_PRODUCTO;
        $detalle->SUBTOTAL_PRODUCTO = $request->SUBTOTAL_PRODUCTO;

        
        $detalle->save();
        return $detalle;
    }

    /**
     * Elimina un registro.
     */
    public function destroy($id)
    {
        $detalle = DetallesVenta::destroy($id);
        return $detalle;
    }
}
