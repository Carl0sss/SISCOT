<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Pedido
 * 
 * @property string $ID_PEDIDO
 * @property string|null $ID_CLIENTE
 * @property string|null $DESCRIPCION_PEDIDO
 * @property float|null $TOTAL_PEDIDO
 * @property float|null $SUBTOTAL_PEDIDO
 * @property float|null $IVA_PEDIDO
 * @property Carbon|null $FECHA_PEDIDO
 * @property Carbon|null $FECHA_ENTREGA_PEDIDO
 * 
 * @property Cliente|null $cliente
 * @property Collection|DetallePedido[] $detalle_pedidos
 *
 * @package App\Models
 */
class Pedido extends Model
{
	protected $table = 'pedidos';
	protected $primaryKey = 'ID_PEDIDO';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'TOTAL_PEDIDO' => 'float',
		'SUBTOTAL_PEDIDO' => 'float',
		'IVA_PEDIDO' => 'float',
		'FECHA_PEDIDO' => 'datetime',
		'FECHA_ENTREGA_PEDIDO' => 'datetime'
	];

	protected $fillable = [
		'ID_CLIENTE',
		'DESCRIPCION_PEDIDO',
		'TOTAL_PEDIDO',
		'SUBTOTAL_PEDIDO',
		'IVA_PEDIDO',
		'FECHA_PEDIDO',
		'FECHA_ENTREGA_PEDIDO'
	];

	public function cliente()
	{
		return $this->belongsTo(Cliente::class, 'ID_CLIENTE');
	}

	public function detalle_pedidos()
	{
		return $this->hasMany(DetallePedido::class, 'ID_PEDIDO');
	}
}
