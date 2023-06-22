<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use App\Models\DetallesVenta;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VentasController extends Controller
{
    public function index()
    {
        $ventas = Venta::all();
        return $ventas;
    }

    public function last()
    {
        $ventas = Venta::orderBy('FECHA_VENTA', 'desc')->first();
        return $ventas;
    }
    /**
     * Almacena un registro nuevo.
     */
    public function store(Request $request)
    {
        // Validar los datos recibidos del formulario
        /*$request->validate([
            'ID_CLIENTE' => 'required',
            'DESCRIPCION_VENTA' => 'required',
            // Otros campos requeridos
        ]);*/
        $fechaIngreso = Carbon::now();
        $venta1 = new Venta();
        $venta1->ID_CLIENTE = $request->input('ID_CLIENTE');
        $venta1->DESCRIPCION_VENTA = $request->input('DESCRIPCION_VENTA');
        $venta1->TOTAL_VENTA = $request->input('TOTAL_VENTA');
        $venta1->SUBTOTAL_VENTA = $request->input('SUBTOTAL_VENTA');
        $venta1->IVA_VENTA = $request->input('IVA_VENTA');
        $venta1->NOMBRE_PERSONA = $request->input('NOMBRE_PERSONA');
        $venta1->DIRECCION_PERSONA = $request->input('DIRECCION_PERSONA');
        $venta1->FECHA_VENTA = $fechaIngreso;

        $venta1->save();
        
        $lastId = Venta::orderBy('FECHA_VENTA', 'desc')->first()->value( 'ID_VENTA' );
        
        // Crear los detalles de cotización si se proporcionaron
        $detalles = $request->input('detalles');
        if ($detalles) {
            foreach ($detalles as $detalle) {
                // Crear una nueva instancia de Detallesventa
                $detalleVenta = new DetallesVenta();
                $detalleVenta->ID_VENTA = $lastId;
                $detalleVenta->ID_PRODUCTO = $detalle->ID_PRODUCTO;
                $detalleVenta->CANTIDA_PRODUCTO = $detalle->CANTIDA_PRODUCTO;
                $detalleVenta->SUBTOTAL_PRODUCTO = $detalle->SUBTOTAL_PRODUCTO;
                // Asignar otros campos del detalle
                
                // Guardar el detalle 
                $detalleVenta->save();
            }
        }
        
        return response()->json(['message' => 'Cotización creada exitosamente']);
    }

    /**
     * Muestra un registro especifico.
     */
    public function show($id)
    {
        $venta = Venta::find($id);
        return $venta;
    }

    /**
     * Actualiza un registro especifico.
     */
    public function update(Request $request,$id)
    {
        $venta1 = Venta::findOrFail($request->id);
        $venta1->ID_CLIENTE = $request->ID_CLIENTE;
        $venta1->DESCRIPCION_VENTA = $request->DESCRIPCION_VENTA;
        $venta1->TOTAL_VENTA = $request->TOTAL_VENTA;
        $venta1->SUBTOTAL_VENTA = $request->SUBTOTAL_VENTA;
        $venta1->IVA_VENTA = $request->IVA_VENTA;
        $venta1->NOMBRE_PERSONA = $request->NOMBRE_PERSONA;
        $venta1->DIRECCION_PERSONA = $request->DIRECCION_PERSONA;
        $venta1->FECHA_VENTA = $request->FECHA_VENTA;
        
        $venta1->save();
        return $venta1;
    }

    /**
     * Elimina un registro.
     */
    public function destroy($id)
    {
        $venta = Venta::destroy($id);
        return $venta;
    }
}
