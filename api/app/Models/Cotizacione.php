<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Cotizacione
 * 
 * @property string $ID_COTIZACION
 * @property string|null $ID_CLIENTE
 * @property string|null $DESCRIPCION_COTIZACIOIN
 * @property float|null $TOTAL_COTIZACION
 * @property float|null $SUBTOTAL_COTIZACION
 * @property float|null $IVA_COTIZACION
 * @property Carbon|null $FECHA_INGRESOS_COTIZACION
 * @property Carbon|null $FECHA_ENTREGA_EST_COTIZACION
 * 
 * @property Cliente|null $cliente
 * @property Collection|DetalleCotizacion[] $detalle_cotizacions
 *
 * @package App\Models
 */
class Cotizacione extends Model
{
	protected $table = 'cotizaciones';
	protected $primaryKey = 'ID_COTIZACION';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'TOTAL_COTIZACION' => 'float',
		'SUBTOTAL_COTIZACION' => 'float',
		'IVA_COTIZACION' => 'float',
		'FECHA_INGRESOS_COTIZACION' => 'datetime',
		'FECHA_ENTREGA_EST_COTIZACION' => 'datetime'
	];

	protected $fillable = [
		'ID_CLIENTE',
		'DESCRIPCION_COTIZACIOIN',
		'TOTAL_COTIZACION',
		'SUBTOTAL_COTIZACION',
		'IVA_COTIZACION',
		'FECHA_INGRESOS_COTIZACION',
		'FECHA_ENTREGA_EST_COTIZACION'
	];

	public function cliente()
	{
		return $this->belongsTo(Cliente::class, 'ID_CLIENTE');
	}

	public function detalle_cotizacions()
	{
		return $this->hasMany(DetalleCotizacion::class, 'ID_COTIZACION');
	}
}
