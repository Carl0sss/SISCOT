<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InventariosMateriasPrima;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\DetalleInventarioMpEgreso;
use App\Models\DetalleInventarioMpIngreso;

class InvMateriasPrimaController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $inventario = InventariosMateriasPrima::all();
        return $inventario;
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {
        $fecha = Carbon::now();
        $lastId = InventariosMateriasPrima::where( 'ID_MATERIA_PRIMA', $request->ID_MATERIA_PRIMA )->value( 'ID_INVENTARIOS_MP' );
        if ( $lastId === null ) {
            $inventario = new InventariosMateriasPrima();
            $inventario->ID_MATERIA_PRIMA = $request->ID_MATERIA_PRIMA;
            $inventario->CANTIDAD_INVENTARIO_MP = 0;
            $inventario->save();
        }
        // Create detalles inventario
        $lastId = InventariosMateriasPrima::where( 'ID_MATERIA_PRIMA', $request->ID_MATERIA_PRIMA )->value( 'ID_INVENTARIOS_MP' );
        $tipo = $request->input( 'tipo' );
        $detalles = $request->input( 'detalles' );
        if ( $detalles ) {
            switch( $tipo ) {
                case 'ingreso':
                foreach ( $detalles as $detalle ) {
                    $detalleIngreso = new DetalleInventarioMpIngreso();
                    $detalleIngreso->ID_INVENTARIOS_MP = $lastId;
                    $detalleIngreso->INV_MP_FECHA_INGRESO = $fecha;
                    $detalleIngreso->INV_MP_CANTIDAD_INGRESO = $detalle[ 'CANTIDAD' ];
                    // Guardar el detalle de cotización en la base de datos
                    $detalleIngreso->save();
                }
                break;
                case 'egreso':
                foreach ( $detalles as $detalle ) {
                    $detalleEgreso = new DetalleInventarioMpEgreso();
                    $detalleEgreso->ID_INVENTARIOS_MP = $lastId;
                    $detalleEgreso->INV_MP_FECHA_EGRESO = $fecha;
                    $detalleEgreso->INV_MP_CANTIDAD_EGRESO = $detalle[ 'CANTIDAD' ];
                    // Guardar el detalle de cotización en la base de datos
                    $detalleEgreso->save();
                }
                break;
            }
        }
        return response()->json( [ 'message' => 'Stock actualizado correctamente', 'id' => $lastId ] );
    }

    /**
    * Display the specified resource.
    */

    public function show( $id ) {
        $inventario = InventariosMateriasPrima::find( $id );
        return $inventario;
    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, $id ) {
        //
    }

    /**
    * Remove the specified resource from storage.
    */

    public function destroy( $id ) {
        $inventario = InventariosMateriasPrima::destroy( $id );
        return $inventario;
    }
}
