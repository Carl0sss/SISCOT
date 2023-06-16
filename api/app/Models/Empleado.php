<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Empleado
 * 
 * @property string $ID_EMPLEADO
 * @property string|null $ID_PUESTO
 * @property string|null $NOMBRE_EMPLEADO
 * @property string|null $APELLIDO_EMPLEADO
 * @property string|null $DUI_EMPLEADO
 * @property string|null $TELEFONO_EMPLEADO
 * @property Carbon|null $FECHA_INGRESO_EMPLEADO
 * @property string|null $EMAIL_EMPLEADO
 * @property Carbon|null $FECHA_NACIMIENTO_EMPLEADO
 * @property string|null $GENERO_EMPLEADO
 * 
 * @property Puesto|null $puesto
 *
 * @package App\Models
 */
class Empleado extends Model
{
	protected $table = 'empleados';
	protected $primaryKey = 'ID_EMPLEADO';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'FECHA_INGRESO_EMPLEADO' => 'datetime',
		'FECHA_NACIMIENTO_EMPLEADO' => 'datetime'
	];

	protected $fillable = [
		'ID_PUESTO',
		'NOMBRE_EMPLEADO',
		'APELLIDO_EMPLEADO',
		'DUI_EMPLEADO',
		'TELEFONO_EMPLEADO',
		'FECHA_INGRESO_EMPLEADO',
		'EMAIL_EMPLEADO',
		'FECHA_NACIMIENTO_EMPLEADO',
		'GENERO_EMPLEADO'
	];

	public function puesto()
	{
		return $this->belongsTo(Puesto::class, 'ID_PUESTO');
	}
}
