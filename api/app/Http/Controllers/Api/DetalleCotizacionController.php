<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DetalleCotizacion;
use Illuminate\Http\Request;

class DetalleCotizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $detalle = DetalleCotizacion::all();
        return $detalle;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $detalle = new DetalleCotizacion();
        $detalle->ID_COTIZACION = $request->ID_COTIZACION;
		$detalle->ID_PRODUCTO = $request->ID_PRODUCTO;
		$detalle->ESPECIFICACIONES_COTIZACION = $request->ESPECIFICACIONES_COTIZACION;
		$detalle->ID_COTIZACANTIDAD_COTIZACIONCION = $request->CANTIDAD_COTIZACION;
		$detalle->SUBTOTA_COTIZACION = $request->SUBTOTA_COTIZACION;
		$detalle->PRESIO_UNITARIO_COTIZACION = $request->PRESIO_UNITARIO_COTIZACION;
        $detalle->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $detalle = DetalleCotizacion::find($id);
        return $detalle;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $detalle = DetalleCotizacion::find($id);
        $detalle->ID_COTIZACION = $request->ID_COTIZACION;
		$detalle->ID_PRODUCTO = $request->ID_PRODUCTO;
		$detalle->ESPECIFICACIONES_COTIZACION = $request->ESPECIFICACIONES_COTIZACION;
		$detalle->ID_COTIZACANTIDAD_COTIZACIONCION = $request->CANTIDAD_COTIZACION;
		$detalle->SUBTOTA_COTIZACION = $request->SUBTOTA_COTIZACION;
		$detalle->PRESIO_UNITARIO_COTIZACION = $request->PRESIO_UNITARIO_COTIZACION;
        $detalle->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DetalleCotizacion::destroy($id);
    }
}
