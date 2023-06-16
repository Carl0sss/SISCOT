<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Area
 * 
 * @property string $ID_AREA
 * @property string|null $NOMBRE_AREA
 * 
 * @property Collection|Departamento[] $departamentos
 *
 * @package App\Models
 */
class Area extends Model
{
	protected $table = 'area';
	protected $primaryKey = 'ID_AREA';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_AREA'
	];

	public function departamentos()
	{
		return $this->hasMany(Departamento::class, 'ID_AREA');
	}
}
