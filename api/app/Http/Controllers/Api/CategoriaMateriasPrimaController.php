<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CategoriaMateriasPrima;
use Illuminate\Http\Request;

class CategoriaMateriasPrimaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoria = CategoriaMateriasPrima::all();
        return $categoria;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoriaMateriasPrima $categoriaMateriasPrima)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CategoriaMateriasPrima $categoriaMateriasPrima)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoriaMateriasPrima $categoriaMateriasPrima)
    {
        //
    }
}
