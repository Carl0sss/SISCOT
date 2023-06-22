<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $productos = Producto::with( 'inventario_productos' )->get();
        return $productos;
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {

        $producto = new Producto();
        $producto->ID_PRODUCTO = $request->ID_PRODUCTO;
        $producto->ID_TIPO_PRODUCTO = $request->ID_TIPO_PRODUCTO;
        $producto->NOMBRE_PRODUCTO = $request->NOMBRE_PRODUCTO;
        $producto->DESCRIPCION_PRODUCTO = $request->DESCRIPCION_PRODUCTO;
        $producto->PRECIO_UNITARIO = $request->PRECIO_UNITARIO;
        $producto->save();

    }

    /**
    * Display the specified resource.
    */

    public function show( $id ) {
        $producto = Producto::with( 'inventario_productos' )->find( $id );
        return $producto;
    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, $id ) {
        $producto = Producto::find( $id );
        $producto->ID_TIPO_PRODUCTO = $request->ID_TIPO_PRODUCTO;
        $producto->NOMBRE_PRODUCTO = $request->NOMBRE_PRODUCTO;
        $producto->DESCRIPCION_PRODUCTO = $request->DESCRIPCION_PRODUCTO;
        $producto->PRECIO_UNITARIO = $request->PRECIO_UNITARIO;
        $producto->save();
    }

    /**
    * Remove the specified resource from storage.
    */

    public function destroy( $id ) {
        Producto::destroy( $id );
    }
}
