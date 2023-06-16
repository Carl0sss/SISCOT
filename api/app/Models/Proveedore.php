<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Proveedore
 * 
 * @property string $ID_PROVEEDOR
 * @property string $NOMBRE_PROVEEDOR
 * @property string|null $DIRECCION_PROVEEDOR
 * @property string|null $TELEFONO_PROVEEDOR
 * @property string|null $EMAIL_PROVEEDOR
 * 
 * @property Collection|MateriasPrima[] $materias_primas
 *
 * @package App\Models
 */
class Proveedore extends Model
{
	protected $table = 'proveedores';
	protected $primaryKey = 'ID_PROVEEDOR';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_PROVEEDOR',
		'DIRECCION_PROVEEDOR',
		'TELEFONO_PROVEEDOR',
		'EMAIL_PROVEEDOR'
	];

	public function materias_primas()
	{
		return $this->hasMany(MateriasPrima::class, 'ID_PROVEEDOR');
	}
}
