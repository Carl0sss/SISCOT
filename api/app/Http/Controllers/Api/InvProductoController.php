<?php

namespace App\Http\Controllers\Api;

use App\Models\InventarioProducto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InvProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventarioProducto = InventarioProducto::all();
        return $inventarioProducto;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inventarioProducto1 = new InvProducto();
        $inventarioProducto1->ID_INVENTARIO_PRODUCTOS = $request->ID_INVENTARIO_PRODUCTOS;
        $inventarioProducto1->ID_PRODUCTO = $request->ID_PRODUCTO;
        $inventarioProducto1->CANTIDAD_INVENTARIO_PRODUCTOS = $request->CANTIDAD_INVENTARIO_PRODUCTOS;

        $inventarioProducto1->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $inventarioProducto = InventarioProducto::find($id);
        return $inventarioProducto;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $inventarioProducto1= inventarioProducto1::findOrFail($request->id);
        $inventarioProducto1->ID_INVENTARIO_PRODUCTOS = $request->ID_INVENTARIO_PRODUCTOS;
        $inventarioProducto1->ID_PRODUCTO = $request->ID_PRODUCTO;
        $inventarioProducto1->PRECIO_UNITARIO = $request->PRECIO_UNITARIO;

        $inventarioProducto1->save();
        return $inventarioProducto1;
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $inventarioProducto = InventarioProducto::destroy($id);
        return $inventarioProducto; 
    }
}
