<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DetalleInventarioMpEgreso
 * 
 * @property string $ID_DET_INV_MP_EGRESOS
 * @property string|null $ID_INVENTARIOS_MP
 * @property Carbon|null $INV_MP_FECHA_EGRESO
 * @property int|null $INV_MP_CANTIDAD_EGRESO
 * 
 * @property InventariosMateriasPrima|null $inventarios_materias_prima
 *
 * @package App\Models
 */
class DetalleInventarioMpEgreso extends Model
{
	protected $table = 'detalle_inventario_mp_egresos';
	protected $primaryKey = 'ID_DET_INV_MP_EGRESOS';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'INV_MP_FECHA_EGRESO' => 'datetime',
		'INV_MP_CANTIDAD_EGRESO' => 'int'
	];

	protected $fillable = [
		'ID_INVENTARIOS_MP',
		'INV_MP_FECHA_EGRESO',
		'INV_MP_CANTIDAD_EGRESO'
	];

	public function inventarios_materias_prima()
	{
		return $this->belongsTo(InventariosMateriasPrima::class, 'ID_INVENTARIOS_MP');
	}
}
