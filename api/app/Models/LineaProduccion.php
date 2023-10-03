<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class LineaProduccion
 * 
 * @property int $ID_LINEA_PRODUCCION
 * @property string|null $NOMBRE_LINEA
 * @property string|null $DESCRIPCION_PASOS
 * 
 * @property Collection|ProcesosPedido[] $procesos_pedidos
 *
 * @package App\Models
 */
class LineaProduccion extends Model
{
	protected $table = 'linea_produccion';
	protected $primaryKey = 'ID_LINEA_PRODUCCION';
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_LINEA',
		'DESCRIPCION_PASOS'
	];

	public function procesos_pedidos()
	{
		return $this->hasMany(ProcesosPedido::class, 'ID_LINEA_PRODUCCION');
	}
}
