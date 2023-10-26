<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RegistroDiario;
use Illuminate\Http\Request;

class RegistroDiarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $registroDiarios = RegistroDiario::all();
        return $registroDiarios;
    }

    /**
     * Muestra el último registro ingresado
     */
    public function last()
    {
        $registroDiario = RegistroDiario::first();
        return $registroDiario;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $registroDiario = new RegistroDiario();
        $registroDiario->ID_PRODUCTO = $request->ID_PRODUCTO;
        $registroDiario->ID_DEPARTAMENTO = $request->ID_DEPARTAMENTO;
        $registroDiario->DETALLES_REGISTRO = $request->DETALLES_REGISTRO;

        $registroDiario->save();


        /** Id del registro ingresado */
        $lastId = RegistroDiario::first()->ID_REGISTRODIA;

        return response()->json(['message' => 'Registro creado exitosamente', 'id' => $lastId]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $registroDiario = RegistroDiario::find($id);
        return $registroDiario;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $registroDiario = RegistroDiario::findOrFail($request->id);
        $registroDiario->ID_PRODUCTO = $request->ID_PRODUCTO;
        $registroDiario->ID_DEPARTAMENTO = $request->ID_DEPARTAMENTO;
        $registroDiario->DETALLES_REGISTRO = $request->DETALLES_REGISTRO;
       
        $registroDiario->save();
        return $registroDiario;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        RegistroDiario::destroy($id);
    }
}
