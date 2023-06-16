<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class InventariosMateriasPrima
 * 
 * @property string $ID_INVENTARIOS_MP
 * @property string|null $ID_MATERIA_PRIMA
 * @property int|null $CANTIDAD_INVENTARIO_MP
 * 
 * @property MateriasPrima|null $materias_prima
 * @property Collection|DetalleInventarioMpEgreso[] $detalle_inventario_mp_egresos
 * @property Collection|DetalleInventarioMpIngreso[] $detalle_inventario_mp_ingresos
 *
 * @package App\Models
 */
class InventariosMateriasPrima extends Model
{
	protected $table = 'inventarios_materias_primas';
	protected $primaryKey = 'ID_INVENTARIOS_MP';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'CANTIDAD_INVENTARIO_MP' => 'int'
	];

	protected $fillable = [
		'ID_MATERIA_PRIMA',
		'CANTIDAD_INVENTARIO_MP'
	];

	public function materias_prima()
	{
		return $this->belongsTo(MateriasPrima::class, 'ID_MATERIA_PRIMA');
	}

	public function detalle_inventario_mp_egresos()
	{
		return $this->hasMany(DetalleInventarioMpEgreso::class, 'ID_INVENTARIOS_MP');
	}

	public function detalle_inventario_mp_ingresos()
	{
		return $this->hasMany(DetalleInventarioMpIngreso::class, 'ID_INVENTARIOS_MP');
	}
}
