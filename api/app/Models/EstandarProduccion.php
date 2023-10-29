<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EstandarProduccion
 * 
 * @property int $ID_ESTANDAR_PRODUCCION
 * @property string|null $DESCRIPCION_ESTANDAR_PRODUCCION
 * @property int|null $TIEMPO_PRODUCCION
 * @property string|null $CRITERIO_EFICIENCIA
 * 
 * @property Collection|EstandaresPedido[] $estandares_pedidos
 *
 * @package App\Models
 */
class EstandarProduccion extends Model
{
	protected $table = 'estandar_produccion';
	protected $primaryKey = 'ID_ESTANDAR_PRODUCCION';
	public $timestamps = false;

	protected $casts = [
		'TIEMPO_PRODUCCION' => 'int'
	];

	protected $fillable = [
		'DESCRIPCION_ESTANDAR_PRODUCCION',
		'TIEMPO_PRODUCCION',
		'CRITERIO_EFICIENCIA'
	];

	public function estandares_pedidos()
	{
		return $this->hasMany(EstandaresPedido::class, 'ID_ESTANDAR_PRODUCCION');
	}
}
