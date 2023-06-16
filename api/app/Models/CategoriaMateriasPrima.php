<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CategoriaMateriasPrima
 * 
 * @property string $ID_CATEGORIA_MP
 * @property string $NOMBRE_CATEGORIA_MP
 * 
 * @property Collection|MateriasPrima[] $materias_primas
 *
 * @package App\Models
 */
class CategoriaMateriasPrima extends Model
{
	protected $table = 'categoria_materias_primas';
	protected $primaryKey = 'ID_CATEGORIA_MP';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_CATEGORIA_MP'
	];

	public function materias_primas()
	{
		return $this->hasMany(MateriasPrima::class, 'ID_CATEGORIA_MP');
	}
}
