<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DetallePedido
 * 
 * @property string $ID_DETALLE_PEDIDO
 * @property string|null $ID_PEDIDO
 * @property string|null $ID_PRODUCTO
 * @property string|null $ESPECIFICACIONES_PEDIDO
 * @property int|null $CANTIDAD_PEDIDO
 * @property float|null $PRESIO_UNITARIO_PEDIDO
 * @property float|null $SUBTOTAL_DETALLE_PEDIDO
 * 
 * @property Pedido|null $pedido
 * @property Producto|null $producto
 *
 * @package App\Models
 */
class DetallePedido extends Model
{
	protected $table = 'detalle_pedido';
	protected $primaryKey = 'ID_DETALLE_PEDIDO';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'CANTIDAD_PEDIDO' => 'int',
		'PRESIO_UNITARIO_PEDIDO' => 'float',
		'SUBTOTAL_DETALLE_PEDIDO' => 'float'
	];

	protected $fillable = [
		'ID_PEDIDO',
		'ID_PRODUCTO',
		'ESPECIFICACIONES_PEDIDO',
		'CANTIDAD_PEDIDO',
		'PRESIO_UNITARIO_PEDIDO',
		'SUBTOTAL_DETALLE_PEDIDO'
	];

	public function pedido()
	{
		return $this->belongsTo(Pedido::class, 'ID_PEDIDO');
	}

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}
}
