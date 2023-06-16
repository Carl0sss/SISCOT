<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DetalleInventarioMpIngreso
 * 
 * @property string $ID_DET_INV_MP_INGRESOS
 * @property string|null $ID_INVENTARIOS_MP
 * @property Carbon|null $INV_MP_FECHA_INGRESO
 * @property int|null $INV_MP_CANTIDAD_INGRESO
 * 
 * @property InventariosMateriasPrima|null $inventarios_materias_prima
 *
 * @package App\Models
 */
class DetalleInventarioMpIngreso extends Model
{
	protected $table = 'detalle_inventario_mp_ingresos';
	protected $primaryKey = 'ID_DET_INV_MP_INGRESOS';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'INV_MP_FECHA_INGRESO' => 'datetime',
		'INV_MP_CANTIDAD_INGRESO' => 'int'
	];

	protected $fillable = [
		'ID_INVENTARIOS_MP',
		'INV_MP_FECHA_INGRESO',
		'INV_MP_CANTIDAD_INGRESO'
	];

	public function inventarios_materias_prima()
	{
		return $this->belongsTo(InventariosMateriasPrima::class, 'ID_INVENTARIOS_MP');
	}
}
