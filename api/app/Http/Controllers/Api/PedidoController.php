<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Pedido;
use Illuminate\Http\Request;
use App\Models\DetallePedido;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $pedidos = Pedido::with('estado_pedido')->get();
        return $pedidos;
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        // Create Cotizacione instance
        $fechaIngreso = Carbon::now();
        // Obtiene la fecha y hora actual
        $pedido = new Pedido();
        $pedido->ID_CLIENTE = $request->ID_CLIENTE;
        $pedido->ID_ESTADO_PEDIDO = 1;
        $pedido->DESCRIPCION_PEDIDO = $request->DESCRIPCION_PEDIDO;
        $pedido->TOTAL_PEDIDO = $request->TOTAL_PEDIDO;
        $pedido->SUBTOTAL_PEDIDO = $request->SUBTOTAL_PEDIDO;
        $pedido->IVA_PEDIDO = $request->IVA_PEDIDO;
        $pedido->FECHA_PEDIDO = $fechaIngreso;
        $pedido->FECHA_ENTREGA_PEDIDO = $request->FECHA_ENTREGA_PEDIDO;

        $pedido->save();

        // Getting the last modified id by date
        $lastId = DB::table('pedidos')->orderBy('FECHA_PEDIDO', 'desc')->value('ID_PEDIDO');
        // Create detalles cotizaion
        $detalles = $request->input('detalles');
        if ($detalles) {
            foreach ($detalles as $detalle) {
                $detallepedido = new DetallePedido();
                $detallepedido->ID_PEDIDO = $lastId;
                $detallepedido->ID_PRODUCTO = $detalle['ID_PRODUCTO'];
                $detallepedido->ESPECIFICACIONES_PEDIDO = $detalle['ESPECIFICACIONES_PEDIDO'];
                $detallepedido->PRESIO_UNITARIO_PEDIDO = $detalle['PRECIO_UNITARIO'];
                $detallepedido->CANTIDAD_PEDIDO = $detalle['CANTIDAD'];
                $detallepedido->SUBTOTAL_DETALLE_PEDIDO = $detalle['SUBTOTA_PRODUCTO'];

                // Guardar el detalle de cotización en la base de datos
                $detallepedido->save();
            }
        }

        /* return response()->json( [ 'message' => 'Cotización creada exitosamente' ] );
        */
        return response()->json(['message' => 'Pedido creado exitosamente', 'id' => $lastId]);
    }

    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        $pedido = Pedido::with('estado_pedido')->find($id);
        return $pedido;
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
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

    public function updateState(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->ID_ESTADO_PEDIDO = $request->ID_ESTADO_PEDIDO;
        $pedido->save();
        return $pedido;
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy($id)
    {
        DetallePedido::where('ID_PEDIDO', $id)->delete();
        Pedido::destroy($id);
    }

    public function avanzarLineaProduccion( $id)
    {
        // Actualiza la línea de producción del pedido.
        $pedido = Pedido::findOrFail($id);
        $pedido->ID_ESTADO_PEDIDO = 2; // Cambia el estado a "En Proceso".
        $pedido->save();

        // Agregar la lógica para avanzar la línea de producción actual (Puedes usar ProcesoPedido).

        // Retornar una respuesta exitosa o un mensaje.
        return response()->json(['message' => 'Línea de producción avanzada con éxito']);
    }
    public function pasarARevision( $id)
    {
        // Cambia el estado del pedido a "Revisión".
        $pedido = Pedido::findOrFail($id);
        $pedido->ID_ESTADO_PEDIDO = 4; // Cambia el estado a "Revisión".
        $pedido->save();

        // Agregar la lógica para marcar el cumplimiento de los estándares (si es necesario).

        // Retornar una respuesta exitosa o un mensaje.
        return response()->json(['message' => 'Pedido en estado de revisión']);
    }
    public function finalizarPedido($id)
    {
        // Cambia el estado del pedido a "Finalizado".
        $pedido = Pedido::findOrFail($id);
        $pedido->ID_ESTADO_PEDIDO = 6; // Cambia el estado a "Finalizado".
        $pedido->save();

        // Agregar cualquier lógica adicional necesaria para finalizar el pedido.

        // Retornar una respuesta exitosa o un mensaje.
        return response()->json(['message' => 'Pedido finalizado con éxito']);
    }
}
