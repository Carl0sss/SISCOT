<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Venta;
use App\Models\DetallesVenta;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class InformesController extends Controller
{
    public function index()
    {
        $ventas = Venta::all();
        return $ventas;
    }

    /**
     * Muestra un registro especifico.
     */
    public function show($id)
    {
        $venta = Venta::find($id);
        return $venta;
    }

}