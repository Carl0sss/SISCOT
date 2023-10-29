<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clientes = Cliente::all();
        return $clientes;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cliente = new Cliente();
        $cliente->ID_CLIENTE = $request->ID_CLIENTE;
        $cliente->NOMBRE_CLIENTE = $request->NOMBRE_CLIENTE;
        $cliente->DIRECCION_CLIENTE = $request->DIRECCION_CLIENTE;
        $cliente->TELEFONO_CLIENTE = $request->TELEFONO_CLIENTE;
        $cliente->NIT_CLIENTE = $request->NIT_CLIENTE;
        $cliente->RAZON_SOCIAL_CLIENTES = $request->RAZON_SOCIAL_CLIENTES;
        $cliente->EMAIL_CLIENTE = $request->EMAIL_CLIENTE;
        $cliente->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $cliente = Cliente::find($id);
        return $cliente;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $cliente = Cliente::find($id);
        $cliente->NOMBRE_CLIENTE = $request->NOMBRE_CLIENTE;
        $cliente->DIRECCION_CLIENTE = $request->DIRECCION_CLIENTE;
        $cliente->TELEFONO_CLIENTE = $request->TELEFONO_CLIENTE;
        $cliente->NIT_CLIENTE = $request->NIT_CLIENTE;
        $cliente->RAZON_SOCIAL_CLIENTES = $request->RAZON_SOCIAL_CLIENTES;
        $cliente->EMAIL_CLIENTE = $request->EMAIL_CLIENTE;
        $cliente->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Cliente::destroy($id);
    }
}
