<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DetalleInventarioProductosIngreso
 * 
 * @property string $ID_DET_INV_PRO_INGRESOS
 * @property string|null $ID_INVENTARIO_PRODUCTOS
 * @property Carbon|null $INV_PRO_FECHA_INGRESO
 * @property int|null $INV_PRO_CANTIDA_INGRESOS
 * 
 * @property InventarioProducto|null $inventario_producto
 *
 * @package App\Models
 */
class DetalleInventarioProductosIngreso extends Model
{
	protected $table = 'detalle_inventario_productos_ingresos';
	protected $primaryKey = 'ID_DET_INV_PRO_INGRESOS';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'INV_PRO_FECHA_INGRESO' => 'datetime',
		'INV_PRO_CANTIDA_INGRESOS' => 'int'
	];

	protected $fillable = [
		'ID_INVENTARIO_PRODUCTOS',
		'INV_PRO_FECHA_INGRESO',
		'INV_PRO_CANTIDA_INGRESOS'
	];

	public function inventario_producto()
	{
		return $this->belongsTo(InventarioProducto::class, 'ID_INVENTARIO_PRODUCTOS');
	}
}
