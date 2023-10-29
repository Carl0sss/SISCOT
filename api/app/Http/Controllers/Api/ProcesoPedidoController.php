<?php

namespace App\Http\Controllers\Api;

use App\Models\ProcesoPedido;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProcesoPedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proceso = ProcesoPedido::with('linea_produccion')->get();
        return $proceso;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $proceso = new ProcesoPedido();
        $proceso->ID_PEDIDO = $request->ID_PEDIDO;
        $proceso->ID_LINEA_PRODUCCION = $request->ID_LINEA_PRODUCCION;
        $proceso->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $proceso =  ProcesoPedido::with('linea_produccion')->where('ID_PEDIDO', $id)->get();
        return $proceso;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $proceso = ProcesoPedido::where('ID_PEDIDO', $id)->first(); // Usar first() para obtener un solo registro
        $proceso->ID_LINEA_PRODUCCION = $request->ID_LINEA_PRODUCCION;
        $proceso->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
