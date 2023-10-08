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
 * @property string|null $NOMBRE_LINEA_PRODUCCION
 * @property string|null $DESCRIPCION_PASOS
 * @property int|null $ORDEN_PRODUCCION
 * 
 * @property Collection|ProcesoPedido[] $proceso_pedidos
 *
 * @package App\Models
 */
class LineaProduccion extends Model
{
	protected $table = 'linea_produccion';
	protected $primaryKey = 'ID_LINEA_PRODUCCION';
	public $timestamps = false;

	protected $casts = [
		'ORDEN_PRODUCCION' => 'int'
	];

	protected $fillable = [
		'NOMBRE_LINEA_PRODUCCION',
		'DESCRIPCION_PASOS',
		'ORDEN_PRODUCCION'
	];

	public function proceso_pedidos()
	{
		return $this->hasMany(ProcesoPedido::class, 'ID_LINEA_PRODUCCION');
	}
}
