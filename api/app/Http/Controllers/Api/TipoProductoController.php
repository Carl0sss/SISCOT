<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoProducto;
use Illuminate\Http\Request;

class TipoProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipo = TipoProducto::all();
        return $tipo;
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
    public function show(TipoProducto $tipoProducto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TipoProducto $tipoProducto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipoProducto $tipoProducto)
    {
        //
    }
}
