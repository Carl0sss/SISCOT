<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class RegistroDiario
 * 
 * @property string $ID_REGISTRODIA
 * @property string|null $ID_PRODUCTO
 * @property string|null $ID_DEPARTAMENTO
 * @property string|null $DETALLES_REGISTRO
 * @property string|null $NOMBRE_PRODUCTO
 * @property string|null $NOMBRE_DEPARTAMENTO
 * @property Carbon|null $FECHA
 * 
 * @property Producto|null $producto
 * @property Departamento|null $departamento
 * @property Collection|DetalleCotizacion[] $detalle_cotizacions
 *
 * @package App\Models
 */
class RegistroDiario extends Model
{
	protected $table = 'registros_diarios';
	protected $primaryKey = 'ID_REGISTRODIA';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'FECHA' => 'datetime'
	];

	protected $fillable = [
		'ID_PRODUCTO',
		'ID_DEPARTAMENTO',
		'DETALLES_REGISTRO',
		'NOMBRE_PRODUCTO',
        'NOMBRE_DEPARTAMENTO',
		'FECHA'
	];

	public function producto()
	{
		return $this->belongsTo(Producto::class, 'ID_PRODUCTO');
	}

	public function departamento()
	{
		return $this->belongsTo(Departamento::class, 'ID_DEPARTAMENTO');
	}
}
