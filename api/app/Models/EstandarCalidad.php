<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EstandarCalidad
 * 
 * @property int $ID_ESTANDAR_CALIDAD
 * @property string|null $DESCRIPCION_ESTANDAR_CALIDAD
 * @property int|null $TOLERANCIA_MINIMA
 * @property int|null $TOLERANCIA_MAXIMA
 * @property string|null $CRITERIO_APROBACION
 * 
 * @property Collection|EstandaresPedido[] $estandares_pedidos
 *
 * @package App\Models
 */
class EstandarCalidad extends Model
{
	protected $table = 'estandar_calidad';
	protected $primaryKey = 'ID_ESTANDAR_CALIDAD';
	public $timestamps = false;

	protected $casts = [
		'TOLERANCIA_MINIMA' => 'int',
		'TOLERANCIA_MAXIMA' => 'int'
	];

	protected $fillable = [
		'DESCRIPCION_ESTANDAR_CALIDAD',
		'TOLERANCIA_MINIMA',
		'TOLERANCIA_MAXIMA',
		'CRITERIO_APROBACION'
	];

	public function estandares_pedidos()
	{
		return $this->hasMany(EstandaresPedido::class, 'ID_ESTANDAR_CALIDAD');
	}
}
