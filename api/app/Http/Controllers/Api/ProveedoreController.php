<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Proveedore;
use Illuminate\Http\Request;

class ProveedoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proveedor = Proveedore::all();
        return $proveedor;
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
    public function show(Proveedore $proveedore)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Proveedore $proveedore)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proveedore $proveedore)
    {
        //
    }
}
