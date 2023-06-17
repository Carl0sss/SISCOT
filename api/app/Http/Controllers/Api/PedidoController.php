<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pedidos = Pedido::all();
        return $pedidos;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pedido = new Pedido();
        $pedido->ID_CLIENTE = $request->ID_CLIENTE;
        $pedido->DESCRIPCION_PEDIDO = $request->DESCRIPCION_PEDIDO;
        $pedido->TOTAL_PEDIDO = $request->TOTAL_PEDIDO;
        $pedido->SUBTOTAL_PEDIDO = $request->SUBTOTAL_PEDIDO;
        $pedido->IVA_PEDIDO = $request->IVA_PEDIDO;
        $pedido->FECHA_PEDIDO = $request->FECHA_PEDIDO;
        $pedido->FECHA_ENTREGA_PEDIDO = $request->FECHA_ENTREGA_PEDIDO;

        $pedido->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pedido = Pedido::find($id);
        return $pedido;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($request->id);
        $pedido->ID_CLIENTE = $request->ID_CLiente;
        $pedido->DESCRIPCION_PEDIDO = $request->DESCRIPCION_PEDIDO;
        $pedido->TOTAL_PEDIDO = $request->TOTAL_PEDIDO;
        $pedido->SUBTOTAL_PEDIDO = $request->SUBTOTAL_PEDIDO;
        $pedido->IVA_PEDIDO = $request->IVA_PEDIDO;
        $pedido->FECHA_PEDIDO = $request->FECHA_PEDIDO;
        $pedido->FECHA_ENTREGA_PEDIDO = $request->FECHA_ENTREGA_PEDIDO;

        $pedido->save();
        return $pedido;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
