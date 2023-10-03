<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ProcesosPedido
 * 
 * @property int $ID_PRODUCCION_PEDIDO
 * @property int|null $ID_ESTANDAR_CALIDAD
 * @property int|null $ID_ESTANDAR_PRODUCCION
 * @property int|null $ID_LINEA_PRODUCCION
 * @property string|null $ID_PEDIDO
 * @property Carbon|null $FECHA_INICIO_PRODUCCION
 * @property Carbon|null $FECHA_FINAL_PRODUCCION
 * @property string|null $ESTADO_PRODUCCION
 * 
 * @property Pedido|null $pedido
 * @property LineaProduccion|null $linea_produccion
 * @property EstandaresCalidad|null $estandares_calidad
 * @property EstandaresProduccion|null $estandares_produccion
 *
 * @package App\Models
 */
class ProcesosPedido extends Model
{
	protected $table = 'procesos_pedidos';
	protected $primaryKey = 'ID_PRODUCCION_PEDIDO';
	public $timestamps = false;

	protected $casts = [
		'ID_ESTANDAR_CALIDAD' => 'int',
		'ID_ESTANDAR_PRODUCCION' => 'int',
		'ID_LINEA_PRODUCCION' => 'int',
		'FECHA_INICIO_PRODUCCION' => 'datetime',
		'FECHA_FINAL_PRODUCCION' => 'datetime'
	];

	protected $fillable = [
		'ID_ESTANDAR_CALIDAD',
		'ID_ESTANDAR_PRODUCCION',
		'ID_LINEA_PRODUCCION',
		'ID_PEDIDO',
		'FECHA_INICIO_PRODUCCION',
		'FECHA_FINAL_PRODUCCION',
		'ESTADO_PRODUCCION'
	];

	public function pedido()
	{
		return $this->belongsTo(Pedido::class, 'ID_PEDIDO');
	}

	public function linea_produccion()
	{
		return $this->belongsTo(LineaProduccion::class, 'ID_LINEA_PRODUCCION');
	}

	public function estandares_calidad()
	{
		return $this->belongsTo(EstandaresCalidad::class, 'ID_ESTANDAR_CALIDAD');
	}

	public function estandares_produccion()
	{
		return $this->belongsTo(EstandaresProduccion::class, 'ID_ESTANDAR_PRODUCCION');
	}
}
