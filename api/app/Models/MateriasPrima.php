<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class MateriasPrima
 * 
 * @property string $ID_MATERIA_PRIMA
 * @property string|null $ID_CATEGORIA_MP
 * @property string|null $ID_PROVEEDOR
 * @property string $NOMBRE_MATERI_PRIMA
 * @property string|null $DETALLES_MATERIA_PRIMA
 * @property float|null $PRECIO_MATERIA_PRIMA
 * 
 * @property CategoriaMateriasPrima|null $categoria_materias_prima
 * @property Proveedore|null $proveedore
 * @property Collection|InventariosMateriasPrima[] $inventarios_materias_primas
 * @property Collection|MateriaPrimaProducto[] $materia_prima_productos
 *
 * @package App\Models
 */
class MateriasPrima extends Model
{
	protected $table = 'materias_primas';
	protected $primaryKey = 'ID_MATERIA_PRIMA';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'PRECIO_MATERIA_PRIMA' => 'float'
	];

	protected $fillable = [
		'ID_CATEGORIA_MP',
		'ID_PROVEEDOR',
		'NOMBRE_MATERI_PRIMA',
		'DETALLES_MATERIA_PRIMA',
		'PRECIO_MATERIA_PRIMA'
	];

	public function categoria_materias_prima()
	{
		return $this->belongsTo(CategoriaMateriasPrima::class, 'ID_CATEGORIA_MP');
	}

	public function proveedore()
	{
		return $this->belongsTo(Proveedore::class, 'ID_PROVEEDOR');
	}

	public function inventarios_materias_primas()
	{
		return $this->hasMany(InventariosMateriasPrima::class, 'ID_MATERIA_PRIMA');
	}

	public function materia_prima_productos()
	{
		return $this->hasMany(MateriaPrimaProducto::class, 'ID_MATERIA_PRIMA');
	}
}
