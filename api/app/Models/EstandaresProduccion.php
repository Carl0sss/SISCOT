<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EstandaresProduccion
 * 
 * @property int $ID_ESTANDAR_PRODUCCION
 * @property string|null $DESCRIPCION_ESTANDAR_PRODUCCION
 * @property int|null $TIEMPO_PRODUCCION
 * @property string|null $CRITERIO_EFICIENCIA
 * 
 * @property Collection|ProcesosPedido[] $procesos_pedidos
 *
 * @package App\Models
 */
class EstandaresProduccion extends Model
{
	protected $table = 'estandares_produccion';
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

	public function procesos_pedidos()
	{
		return $this->hasMany(ProcesosPedido::class, 'ID_ESTANDAR_PRODUCCION');
	}
}
