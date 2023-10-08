<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ProcesoPedido
 * 
 * @property int $ID_PROCESO
 * @property string|null $ID_PEDIDO
 * @property int|null $ID_LINEA_PRODUCCION
 * @property Carbon $FECHA_INICIO_PROCESO
 * 
 * @property LineaProduccion|null $linea_produccion
 * @property Pedido|null $pedido
 *
 * @package App\Models
 */
class ProcesoPedido extends Model
{
	protected $table = 'proceso_pedido';
	protected $primaryKey = 'ID_PROCESO';
	public $timestamps = false;

	protected $casts = [
		'ID_LINEA_PRODUCCION' => 'int',
		'FECHA_INICIO_PROCESO' => 'datetime'
	];

	protected $fillable = [
		'ID_PEDIDO',
		'ID_LINEA_PRODUCCION',
		'FECHA_INICIO_PROCESO'
	];

	public function linea_produccion()
	{
		return $this->belongsTo(LineaProduccion::class, 'ID_LINEA_PRODUCCION');
	}

	public function pedido()
	{
		return $this->belongsTo(Pedido::class, 'ID_PEDIDO');
	}
}
