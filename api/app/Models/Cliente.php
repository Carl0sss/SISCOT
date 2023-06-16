<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Cliente
 * 
 * @property string $ID_CLIENTE
 * @property string|null $NOMBRE_CLIENTE
 * @property string|null $DIRECCION_CLIENTE
 * @property string|null $TELEFONO_CLIENTE
 * @property string|null $NIT_CLIENTE
 * @property string|null $RAZON_SOCIAL_CLIENTES
 * @property string|null $EMAIL_CLIENTE
 * 
 * @property Collection|Cotizacione[] $cotizaciones
 * @property Collection|Pedido[] $pedidos
 * @property Collection|Venta[] $ventas
 *
 * @package App\Models
 */
class Cliente extends Model
{
	protected $table = 'clientes';
	protected $primaryKey = 'ID_CLIENTE';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_CLIENTE',
		'DIRECCION_CLIENTE',
		'TELEFONO_CLIENTE',
		'NIT_CLIENTE',
		'RAZON_SOCIAL_CLIENTES',
		'EMAIL_CLIENTE'
	];

	public function cotizaciones()
	{
		return $this->hasMany(Cotizacione::class, 'ID_CLIENTE');
	}

	public function pedidos()
	{
		return $this->hasMany(Pedido::class, 'ID_CLIENTE');
	}

	public function ventas()
	{
		return $this->hasMany(Venta::class, 'ID_CLIENTE');
	}
}
