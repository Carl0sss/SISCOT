<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DetalleCotizacion
 * 
 * @property string $ID_DETALLE_COTIZACION
 * @property string|null $ID_COTIZACION
 * @property string|null $ID_PRODUCTO
 * @property string|null $ESPECIFICACIONES_COTIZACION
 * @property int|null $CANTIDAD_COTIZACION
 * @property float|null $SUBTOTA_COTIZACION
 * @property float|null $PRESIO_UNITARIO_COTIZACION
 * 
 * @property Cotizacione|null $cotizacione
 * @property Producto|null $producto
 *
 * @package App\Models
 */
class DetalleCotizacion extends Model
{
	protected $table = 'detalle_cotizacion';
	protected $primaryKey = 'ID_DETALLE_COTIZACION';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'CANTIDAD_COTIZACION' => 'int',
		'SUBTOTA_COTIZACION' => 'float',
		'PRESIO_UNITARIO_COTIZACION' => 'float'
	];

	protected $fillable = [
		'ID_COTIZACION',
		'ID_PRODUCTO',
		'ESPECIFICACIONES_COTIZACION',
		'CANTIDAD_COTIZACION',
		'SUBTOTA_COTIZACION',
		'PRESIO_UNITARIO_COTIZACION'
	];

	public function cotizacione()
	{
		return $this->belongsTo(Cotizacione::class, 'ID_COTIZACION');
	}

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}
}
