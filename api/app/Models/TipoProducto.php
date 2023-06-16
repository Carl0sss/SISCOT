<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TipoProducto
 * 
 * @property string $ID_TIPO_PRODUCTO
 * @property string $NOMBRE_TIPO_PRODUCTO
 * 
 * @property Collection|Producto[] $productos
 *
 * @package App\Models
 */
class TipoProducto extends Model
{
	protected $table = 'tipo_productos';
	protected $primaryKey = 'ID_TIPO_PRODUCTO';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'NOMBRE_TIPO_PRODUCTO'
	];

	public function productos()
	{
		return $this->hasMany(Producto::class, 'ID_TIPO_PRODUCTO');
	}
}
