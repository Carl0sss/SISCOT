<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class MateriaPrimaProducto
 * 
 * @property string $ID_MATAERIA_PRIMA_PRODUCTO
 * @property string|null $ID_MATERIA_PRIMA
 * @property string|null $ID_PRODUCTO
 * 
 * @property MateriasPrima|null $materias_prima
 * @property Producto|null $producto
 *
 * @package App\Models
 */
class MateriaPrimaProducto extends Model
{
	protected $table = 'materia_prima_producto';
	protected $primaryKey = 'ID_MATAERIA_PRIMA_PRODUCTO';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'ID_MATERIA_PRIMA',
		'ID_PRODUCTO'
	];

	public function materias_prima()
	{
		return $this->belongsTo(MateriasPrima::class, 'ID_MATERIA_PRIMA');
	}

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}
}
