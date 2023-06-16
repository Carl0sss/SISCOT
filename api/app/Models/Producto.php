<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Producto
 * 
 * @property string $ID_PRODUCTO
 * @property string|null $ID_TIPO_PRODUCTO
 * @property string $NOMBRE_PRODUCTO
 * @property string $DESCRIPCION_PRODUCTO
 * @property float|null $PRECIO_UNITARIO
 * 
 * @property TipoProducto|null $tipo_producto
 * @property Collection|DetalleCotizacion[] $detalle_cotizacions
 * @property Collection|DetallePedido[] $detalle_pedidos
 * @property Collection|DetallesVenta[] $detalles_ventas
 * @property Collection|InventarioProducto[] $inventario_productos
 * @property Collection|MateriaPrimaProducto[] $materia_prima_productos
 *
 * @package App\Models
 */
class Producto extends Model
{
	protected $table = 'productos';
	protected $primaryKey = 'ID_PRODUCTO';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'PRECIO_UNITARIO' => 'float'
	];

	protected $fillable = [
		'ID_TIPO_PRODUCTO',
		'NOMBRE_PRODUCTO',
		'DESCRIPCION_PRODUCTO',
		'PRECIO_UNITARIO'
	];

	public function tipo_producto()
	{
		return $this->belongsTo(TipoProducto::class, 'ID_TIPO_PRODUCTO');
	}

	public function detalle_cotizacions()
	{
		return $this->hasMany(DetalleCotizacion::class, 'ID_PRODUCTO');
	}

	public function detalle_pedidos()
	{
		return $this->hasMany(DetallePedido::class, 'ID_PRODUCTO');
	}

	public function detalles_ventas()
	{
		return $this->hasMany(DetallesVenta::class, 'ID_PRODUCTO');
	}

	public function inventario_productos()
	{
		return $this->hasMany(InventarioProducto::class, 'ID_PRODUCTO');
	}

	public function materia_prima_productos()
	{
		return $this->hasMany(MateriaPrimaProducto::class, 'ID_PRODUCTO');
	}
}
