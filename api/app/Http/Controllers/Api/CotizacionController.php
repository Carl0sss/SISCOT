<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cotizacione;
use App\Models\DetalleCotizacion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CotizacionController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $cotizaciones = Cotizacione::all();
        return $cotizaciones;
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {
        // Create Cotizacione instance
        $fechaIngreso = Carbon::now();
        // Obtiene la fecha y hora actual
        $cotizacion = new Cotizacione();
        $cotizacion->ID_CLIENTE = $request->ID_CLIENTE;
        $cotizacion->DESCRIPCION_COTIZACIOIN = $request->DESCRIPCION_COTIZACIOIN;
        $cotizacion->TOTAL_COTIZACION = $request->TOTAL_COTIZACION;
        $cotizacion->SUBTOTAL_COTIZACION = $request->SUBTOTAL_COTIZACION;
        $cotizacion->IVA_COTIZACION = $request->IVA_COTIZACION;
        $cotizacion->FECHA_INGRESOS_COTIZACION = $fechaIngreso;
        $cotizacion->FECHA_ENTREGA_EST_COTIZACION = $request->FECHA_ENTREGA_EST_COTIZACION;
        $cotizacion->save();

        // Getting the last modified id by date
        $lastId = DB::table( 'cotizaciones' )->orderBy( 'FECHA_INGRESOS_COTIZACION', 'desc' )->value( 'ID_COTIZACION' );


        // Create detalles cotizaion
        $detalles = $request->input( 'detalles' );
        if ( $detalles ) {
            foreach ( $detalles as $detalle ) {
                $detalleCotizacion = new DetalleCotizacion();
                $detalleCotizacion->ID_COTIZACION = $lastId;
                $detalleCotizacion->ID_PRODUCTO = $detalle[ 'ID_PRODUCTO' ];
                $detalleCotizacion->ESPECIFICACIONES_COTIZACION = $detalle[ 'ESPECIFICACIONES_COTIZACION' ];
                $detalleCotizacion->PRESIO_UNITARIO_COTIZACION = $detalle[ 'PRECIO_UNITARIO' ];
                $detalleCotizacion->CANTIDAD_COTIZACION = $detalle[ 'CANTIDAD_COTIZACION' ];
                $detalleCotizacion->SUBTOTA_COTIZACION = $detalle[ 'SUBTOTA_COTIZACION' ];

                // Guardar el detalle de cotización en la base de datos
                $detalleCotizacion->save();
            }
        }

        /* return response()->json( [ 'message' => 'Cotización creada exitosamente' ] );
        */
        return response()->json( [ 'message' => 'Cotización creada exitosamente', 'id' => $lastId ] );
    }

    /**
    * Display the specified resource.
    */

    public function show( $id ) {
        $cotizacion = Cotizacione::find( $id );
        return $cotizacion;
    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, $id ) {
        $cotizacion = Cotizacione::find( $id );
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

    public function destroy( $id ) {
        Cotizacione::destroy( $id );
    }
}
