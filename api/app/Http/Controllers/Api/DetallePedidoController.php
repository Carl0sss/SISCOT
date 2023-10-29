<?php

namespace App\Http\Controllers\Api;

use App\Models\DetallePedido;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetallePedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DetallePedido::all();
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = DetallePedido::where('ID_PEDIDO', $id)->get();
        return $data;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DetallePedido $detallePedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DetallePedido $detallePedido)
    {
        //
    }
}
