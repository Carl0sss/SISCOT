<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use Illuminate\Http\Request;

class VentasController extends Controller
{
    public function index()
    {
        $ventas = Venta::all();
        return $ventas;
    }

    /**
     * Almacena un registro nuevo.
     */
    public function store(Request $request)
    {
        $venta1 = new Venta();
        $venta1->ID_CLIENTE = $request->ID_CLIENTE;
        $venta1->DESCRIPCION_VENTA = $request->DESCRIPCION_VENTA;
        $venta1->TOTAL_VENTA = $request->TOTAL_VENTA;
        $venta1->SUBTOTAL_VENTA = $request->SUBTOTAL_VENTA;
        $venta1->IVA_VENTA = $request->IVA_VENTA;
        $venta1->NOMBRE_PERSONA = $request->NOMBRE_PERSONA;
        $venta1->DIRECCION_PERSONA = $request->DIRECCION_PERSONA;
        $venta1->FECHA_VENTA = $request->FECHA_VENTA;

        $venta1->save();
    }

    /**
     * Muestra un registro especifico.
     */
    public function show($id)
    {
        $venta = Venta::find($id);
        return $venta;
    }

    /**
     * Actualiza un registro especifico.
     */
    public function update(Request $request,$id)
    {
        $venta1 = Venta::findOrFail($request->id);
        $venta1->ID_CLIENTE = $request->ID_CLIENTE;
        $venta1->DESCRIPCION_VENTA = $request->DESCRIPCION_VENTA;
        $venta1->TOTAL_VENTA = $request->TOTAL_VENTA;
        $venta1->SUBTOTAL_VENTA = $request->SUBTOTAL_VENTA;
        $venta1->IVA_VENTA = $request->IVA_VENTA;
        $venta1->NOMBRE_PERSONA = $request->NOMBRE_PERSONA;
        $venta1->DIRECCION_PERSONA = $request->DIRECCION_PERSONA;
        $venta1->FECHA_VENTA = $request->FECHA_VENTA;
        
        $venta1->save();
        return $venta1;
    }

    /**
     * Elimina un registro.
     */
    public function destroy($id)
    {
        $venta = Venta::destroy($id);
        return $venta;
    }
}
