<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class InventarioProducto
 * 
 * @property string $ID_INVENTARIO_PRODUCTOS
 * @property string|null $ID_PRODUCTO
 * @property int|null $CANTIDAD_INVENTARIO_PRODUCTOS
 * 
 * @property Producto|null $producto
 * @property Collection|DetalleInventarioProductosIngreso[] $detalle_inventario_productos_ingresos
 * @property Collection|DetalleInventarioProductsEgreso[] $detalle_inventario_products_egresos
 *
 * @package App\Models
 */
class InventarioProducto extends Model
{
	protected $table = 'inventario_productos';
	protected $primaryKey = 'ID_INVENTARIO_PRODUCTOS';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'CANTIDAD_INVENTARIO_PRODUCTOS' => 'int'
	];

	protected $fillable = [
		'ID_PRODUCTO',
		'CANTIDAD_INVENTARIO_PRODUCTOS'
	];

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}

	public function detalle_inventario_productos_ingresos()
	{
		return $this->hasMany(DetalleInventarioProductosIngreso::class, 'ID_INVENTARIO_PRODUCTOS');
	}

	public function detalle_inventario_products_egresos()
	{
		return $this->hasMany(DetalleInventarioProductsEgreso::class, 'ID_INVENTARIO_PRODUCTOS');
	}
}
