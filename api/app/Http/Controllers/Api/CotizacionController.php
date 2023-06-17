<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cotizacione;
use Illuminate\Http\Request;

class CotizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cotizaciones = Cotizacione::all();
        return $cotizaciones;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cotizacion = new Cotizacione();
        $cotizacion->ID_COTIZACION = $request->ID_COTIZACION;
        $cotizacion->ID_CLIENTE = $request->ID_CLIENTE;
        $cotizacion->DESCRIPCION_COTIZACIOIN = $request->DESCRIPCION_COTIZACIOIN;
        $cotizacion->TOTAL_COTIZACION = $request->TOTAL_COTIZACION;
        $cotizacion->SUBTOTAL_COTIZACION = $request->SUBTOTAL_COTIZACION;
        $cotizacion->IVA_COTIZACION = $request->IVA_COTIZACION;
        $cotizacion->FECHA_INGRESOS_COTIZACION = $request->FECHA_INGRESOS_COTIZACION;
        $cotizacion->FECHA_ENTREGA_EST_COTIZACION = $request->FECHA_ENTREGA_EST_COTIZACION;
        $cotizacion->save();

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $cotizacion = Cotizacione::find($id);
        return $cotizacion;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $cotizacion = Cotizacione::find($id);
        $cotizacion->ID_CLIENTE = $request->ID_CLIENTE;
        $cotizacion->DESCRIPCION_COTIZACIOIN = $request->DESCRIPCION_COTIZACIOIN;
        $cotizacion->TOTAL_COTIZACION = $request->TOTAL_COTIZACION;
        $cotizacion->SUBTOTAL_COTIZACION = $request->SUBTOTAL_COTIZACION;
        $cotizacion->IVA_COTIZACION = $request->IVA_COTIZACION;
        $cotizacion->FECHA_INGRESOS_COTIZACION = $request->FECHA_INGRESOS_COTIZACION;
        $cotizacion->FECHA_ENTREGA_EST_COTIZACION = $request->FECHA_ENTREGA_EST_COTIZACION;
        $cotizacion->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Cotizacione::destroy($id);
    }
}
