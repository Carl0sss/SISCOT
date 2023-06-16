<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Departamento
 * 
 * @property string $ID_DEPARTAMENTO
 * @property string|null $ID_AREA
 * @property string|null $NOMBRE_DEPARTAMENTO
 * 
 * @property Area|null $area
 * @property Collection|Puesto[] $puestos
 *
 * @package App\Models
 */
class Departamento extends Model
{
	protected $table = 'departamentos';
	protected $primaryKey = 'ID_DEPARTAMENTO';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'ID_AREA',
		'NOMBRE_DEPARTAMENTO'
	];

	public function area()
	{
		return $this->belongsTo(Area::class, 'ID_AREA');
	}

	public function puestos()
	{
		return $this->hasMany(Puesto::class, 'ID_DEPARTAMENTO');
	}
}
