<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EstandaresPedido
 * 
 * @property int $ID_ESTANDARES_PEDIDOS
 * @property int|null $ID_ESTANDAR_CALIDAD
 * @property int|null $ID_ESTANDAR_PRODUCCION
 * @property string|null $ID_PEDIDO
 * @property bool|null $CUMPLE_ESTANDARES
 * 
 * @property Pedido|null $pedido
 * @property EstandarCalidad|null $estandar_calidad
 * @property EstandarProduccion|null $estandar_produccion
 *
 * @package App\Models
 */
class EstandaresPedido extends Model
{
	protected $table = 'estandares_pedido';
	protected $primaryKey = 'ID_ESTANDARES_PEDIDOS';
	public $timestamps = false;

	protected $casts = [
		'ID_ESTANDAR_CALIDAD' => 'int',
		'ID_ESTANDAR_PRODUCCION' => 'int',
		'CUMPLE_ESTANDARES' => 'bool'
	];

	protected $fillable = [
		'ID_ESTANDAR_CALIDAD',
		'ID_ESTANDAR_PRODUCCION',
		'ID_PEDIDO',
		'CUMPLE_ESTANDARES'
	];

	public function pedido()
	{
		return $this->belongsTo(Pedido::class, 'ID_PEDIDO');
	}

	public function estandar_calidad()
	{
		return $this->belongsTo(EstandarCalidad::class, 'ID_ESTANDAR_CALIDAD');
	}

	public function estandar_produccion()
	{
		return $this->belongsTo(EstandarProduccion::class, 'ID_ESTANDAR_PRODUCCION');
	}
}
