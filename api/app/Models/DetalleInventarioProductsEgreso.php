<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DetalleInventarioProductsEgreso
 * 
 * @property string $ID_DET_INV_PRO_EGRESOS
 * @property string|null $ID_INVENTARIO_PRODUCTOS
 * @property Carbon|null $INV_PRO_FECHA_EGRESO
 * @property int|null $INV_PRO_CANTIDAD_EGRESO
 * 
 * @property InventarioProducto|null $inventario_producto
 *
 * @package App\Models
 */
class DetalleInventarioProductsEgreso extends Model
{
	protected $table = 'detalle_inventario_products_egresos';
	protected $primaryKey = 'ID_DET_INV_PRO_EGRESOS';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'INV_PRO_FECHA_EGRESO' => 'datetime',
		'INV_PRO_CANTIDAD_EGRESO' => 'int'
	];

	protected $fillable = [
		'ID_INVENTARIO_PRODUCTOS',
		'INV_PRO_FECHA_EGRESO',
		'INV_PRO_CANTIDAD_EGRESO'
	];

	public function inventario_producto()
	{
		return $this->belongsTo(InventarioProducto::class, 'ID_INVENTARIO_PRODUCTOS');
	}
}
