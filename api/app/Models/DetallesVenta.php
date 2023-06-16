<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DetallesVenta
 * 
 * @property string $ID_DETALLE_VENTA
 * @property string|null $ID_VENTA
 * @property string|null $ID_PRODUCTO
 * @property int|null $CANTIDA_PRODUCTO
 * @property float|null $SUBTOTAL_PRODUCTO
 * 
 * @property Producto|null $producto
 * @property Venta|null $venta
 *
 * @package App\Models
 */
class DetallesVenta extends Model
{
	protected $table = 'detalles_ventas';
	protected $primaryKey = 'ID_DETALLE_VENTA';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'CANTIDA_PRODUCTO' => 'int',
		'SUBTOTAL_PRODUCTO' => 'float'
	];

	protected $fillable = [
		'ID_VENTA',
		'ID_PRODUCTO',
		'CANTIDA_PRODUCTO',
		'SUBTOTAL_PRODUCTO'
	];

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}

	public function venta()
	{
		return $this->belongsTo(Venta::class, 'ID_VENTA');
	}
}
