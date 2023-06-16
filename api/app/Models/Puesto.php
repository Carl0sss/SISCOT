<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Puesto
 * 
 * @property string $ID_PUESTO
 * @property string|null $ID_DEPARTAMENTO
 * @property string $NOMBRE_PUESTO
 * @property string|null $DESCRIPCION_PUESTO
 * 
 * @property Departamento|null $departamento
 * @property Collection|Empleado[] $empleados
 *
 * @package App\Models
 */
class Puesto extends Model
{
	protected $table = 'puestos';
	protected $primaryKey = 'ID_PUESTO';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'ID_DEPARTAMENTO',
		'NOMBRE_PUESTO',
		'DESCRIPCION_PUESTO'
	];

	public function departamento()
	{
		return $this->belongsTo(Departamento::class, 'ID_DEPARTAMENTO');
	}

	public function empleados()
	{
		return $this->hasMany(Empleado::class, 'ID_PUESTO');
	}
}
