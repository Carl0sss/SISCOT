<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RegistroDiario;
use Illuminate\Http\Request;
use Carbon\Carbon;

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
        $fecha = Carbon::now();
        $registroDiario = new RegistroDiario();
        $registroDiario->ID_PRODUCTO = $request->ID_PRODUCTO;
        $registroDiario->ID_DEPARTAMENTO = $request->ID_DEPARTAMENTO;
        $registroDiario->DETALLES_REGISTRO = $request->DETALLES_REGISTRO;
        $registroDiario->NOMBRE_PRODUCTO = $request->NOMBRE_PRODUCTO;
        $registroDiario->NOMBRE_DEPARTAMENTO = $request->NOMBRE_DEPARTAMENTO;
        $registroDiario->FECHA = $fecha;

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
        $registroDiario->ID_PRODUCTO = $registroDiario->ID_PRODUCTO;
        $registroDiario->ID_DEPARTAMENTO = $registroDiario->ID_DEPARTAMENTO;
        $registroDiario->DETALLES_REGISTRO = $request->DETALLES_REGISTRO;
        $registroDiario->NOMBRE_PRODUCTO = $registroDiario->NOMBRE_PRODUCTO;
        $registroDiario->NOMBRE_DEPARTAMENTO = $registroDiario->NOMBRE_DEPARTAMENTO;
        $registroDiario->FECHA = $registroDiario->FECHA;
       
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
