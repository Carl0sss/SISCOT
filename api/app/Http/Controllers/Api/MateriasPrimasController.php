<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MateriasPrima;
use Illuminate\Http\Request;

class MateriasPrimasController extends Controller {
    public function index() {
        $MateriasPrimas = MateriasPrima::with( 'inventarios_materias_primas' )->get();
        return $MateriasPrimas;
    }

    public function store( Request $request ) {
        $MateriasPrimas = new MateriasPrima();
        $MateriasPrimas->ID_MATERIA_PRIMA = $request->ID_MATERIA_PRIMA;
        $MateriasPrimas->ID_CATEGORIA_MP = $request->ID_CATEGORIA_MP;
        $MateriasPrimas->ID_PROVEEDOR = $request->ID_PROVEEDOR;
        $MateriasPrimas->NOMBRE_MATERI_PRIMA = $request->NOMBRE_MATERI_PRIMA;
        $MateriasPrimas->DETALLES_MATERIA_PRIMA = $request->DETALLES_MATERIA_PRIMA;
        $MateriasPrimas->PRECIO_MATERIA_PRIMA = $request->PRECIO_MATERIA_PRIMA;

        $MateriasPrimas->save();
    }

    public function show( $id ) {
        $MateriasPrimas = MateriasPrima::find( $id );
        return $MateriasPrimas;
    }

    public function update( Request $request, $id ) {
        $MateriasPrimas = MateriasPrima::findOrFail( $id );
        $MateriasPrimas->ID_MATERIA_PRIMA = $request->ID_MATERIA_PRIMA;
        $MateriasPrimas->ID_CATEGORIA_MP = $request->ID_CATEGORIA_MP;
        $MateriasPrimas->ID_PROVEEDOR = $request->ID_PROVEEDOR;
        $MateriasPrimas->NOMBRE_MATERI_PRIMA = $request->NOMBRE_MATERI_PRIMA;
        $MateriasPrimas->DETALLES_MATERIA_PRIMA = $request->DETALLES_MATERIA_PRIMA;
        $MateriasPrimas->PRECIO_MATERIA_PRIMA = $request->PRECIO_MATERIA_PRIMA;
        $MateriasPrimas->save();
        return $MateriasPrimas;
    }

    public function destroy( $id ) {
        MateriasPrima::destroy( $id );
    }
}
