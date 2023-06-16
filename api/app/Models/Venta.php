<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Venta
 * 
 * @property string $ID_VENTA
 * @property string|null $ID_CLIENTE
 * @property string|null $DESCRIPCION_VENTA
 * @property float|null $TOTAL_VENTA
 * @property float|null $SUBTOTAL_VENTA
 * @property float|null $IVA_VENTA
 * @property string|null $NOMBRE_PERSONA
 * @property string|null $DIRECCION_PERSONA
 * @property Carbon|null $FECHA_VENTA
 * 
 * @property Cliente|null $cliente
 * @property Collection|DetallesVenta[] $detalles_ventas
 *
 * @package App\Models
 */
class Venta extends Model
{
	protected $table = 'ventas';
	protected $primaryKey = 'ID_VENTA';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'TOTAL_VENTA' => 'float',
		'SUBTOTAL_VENTA' => 'float',
		'IVA_VENTA' => 'float',
		'FECHA_VENTA' => 'datetime'
	];

	protected $fillable = [
		'ID_CLIENTE',
		'DESCRIPCION_VENTA',
		'TOTAL_VENTA',
		'SUBTOTAL_VENTA',
		'IVA_VENTA',
		'NOMBRE_PERSONA',
		'DIRECCION_PERSONA',
		'FECHA_VENTA'
	];

	public function cliente()
	{
		return $this->belongsTo(Cliente::class, 'ID_CLIENTE');
	}

	public function detalles_ventas()
	{
		return $this->hasMany(DetallesVenta::class, 'ID_VENTA');
	}
}
