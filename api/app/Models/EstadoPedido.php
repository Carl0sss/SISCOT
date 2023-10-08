<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EstadoPedido
 * 
 * @property int $ID_ESTADO_PEDIDO
 * @property string|null $NOMBRE_ESTADO
 * 
 * @property Collection|Pedido[] $pedidos
 *
 * @package App\Models
 */
class EstadoPedido extends Model
{
	protected $table = 'estado_pedido';
	protected $primaryKey = 'ID_ESTADO_PEDIDO';
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_ESTADO'
	];

	public function pedidos()
	{
		return $this->hasMany(Pedido::class, 'ID_ESTADO_PEDIDO');
	}
}
