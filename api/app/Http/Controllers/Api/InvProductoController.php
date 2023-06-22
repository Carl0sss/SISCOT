<?php

namespace App\Http\Controllers\Api;

use App\Models\InventarioProducto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\DetalleInventarioProductosIngreso;
use App\Models\DetalleInventarioProductsEgreso;

class InvProductoController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $inventarioProducto = InventarioProducto::all();
        return $inventarioProducto;
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {

        /* Control  */
        $fecha = Carbon::now();
        $lastId = InventarioProducto::where('ID_PRODUCTO', $request->ID_PRODUCTO)->value('ID_INVENTARIO_PRODUCTOS');

        if ( $lastId === null ) {
            $inventarioProducto1 = new InventarioProducto();
            $inventarioProducto1->ID_PRODUCTO = $request->ID_PRODUCTO;
            $inventarioProducto1->CANTIDAD_INVENTARIO_PRODUCTOS = 0;
            $inventarioProducto1->save();
        }

        // Create detalles inventario
        $lastId = InventarioProducto::where('ID_PRODUCTO', $request->ID_PRODUCTO)->value('ID_INVENTARIO_PRODUCTOS');
        $tipo = $request->input( 'tipo' );
        $detalles = $request->input( 'detalles' );
        if ( $detalles ) {
            switch( $tipo ) {
                case 'ingreso':
                foreach ( $detalles as $detalle ) {
                    $detalleIngreso = new DetalleInventarioProductosIngreso();
                    $detalleIngreso->ID_INVENTARIO_PRODUCTOS = $lastId;
                    $detalleIngreso->INV_PRO_FECHA_INGRESO = $fecha;
                    $detalleIngreso->INV_PRO_CANTIDA_INGRESOS = $detalle[ 'CANTIDAD' ];
                    // Guardar el detalle de cotización en la base de datos
                    $detalleIngreso->save();
                }
                break;
                case 'egreso':
                foreach ( $detalles as $detalle ) {
                    $detalleEgreso = new DetalleInventarioProductsEgreso();
                    $detalleEgreso->ID_INVENTARIO_PRODUCTOS = $lastId;
                    $detalleEgreso->INV_PRO_FECHA_EGRESO = $fecha;
                    $detalleEgreso->INV_PRO_CANTIDAD_EGRESO = $detalle[ 'CANTIDAD' ];
                    // Guardar el detalle de cotización en la base de datos
                    $detalleEgreso->save();
                }
                break;
            }
        }

        /* return response()->json( [ 'message' => 'Cotización creada exitosamente' ] );
        */
        return response()->json( [ 'message' => 'Stock actualizado correctamente', 'id' => $lastId ] );
    }

    /**
    * Display the specified resource.
    */

    public function show( $id ) {
        $inventarioProducto = InventarioProducto::find( $id );
        return $inventarioProducto;

    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, $id ) {
        $inventarioProducto1 = InventarioProducto::findOrFail( $id );
        $inventarioProducto1->ID_INVENTARIO_PRODUCTOS = $request->ID_INVENTARIO_PRODUCTOS;
        $inventarioProducto1->ID_PRODUCTO = $request->ID_PRODUCTO;
        $inventarioProducto1->PRECIO_UNITARIO = $request->PRECIO_UNITARIO;

        $inventarioProducto1->save();
        return $inventarioProducto1;
    }
    /**
    * Remove the specified resource from storage.
    */

    public function destroy( $id ) {
        $inventarioProducto = InventarioProducto::destroy( $id );
        return $inventarioProducto;
    }
}
