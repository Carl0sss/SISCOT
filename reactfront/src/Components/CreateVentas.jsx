import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/venta';
const endpoint2 = 'http://127.0.0.1:8000/api';
const CreateVentas = () => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
    const [cliente,setCliente] = useState();
    /*const [descripcion,setDescripcion] = useState('');
    const [total,setTotal] = useState(0);
    const [subtotal,setSubtotal] = useState(0);
    const [iva,setIva] = useState(0);
    const [nombre,setNombre] = useState('');
    const [direccion,setDireccion] = useState('');
    const [fecha,setFecha] = useState('2022-12-31 00:00:00');
    const navigate = useNavigate();
    const [ultregistro,setUltimo] = useState('');
    const [detalles, setDetalles] = useState([]);
*/
//venta object
const [ventaData, setVentaData] = useState({
  ID_CLIENTE: '',
  DESCRIPCION_VENTA: '',
  detalles: [],
  TOTAL_VENTA: 0,
  SUBTOTAL_VENTA: 0,
  IVA_VENTA: 0,
  NOMBRE_PERSONA: '',
  DIRECCION_PERSONA: '',
  FECHA_VENTA: new Date()
});

/* Detalles venta object */
const [detalleData, setDetalleData] = useState({
  ID_PRODUCTO: '',
  CANTIDAD_PRODUCTO: 0,
  SUBTOTAL_PRODUCTO: 0,
  PRECIO_UNITARIO: 0,
});

  const handleVentaInputChange = (e)=>{
    setVentaData({
      ...ventaData,
      [e.target.name]: e.target.value,
    });
  }
  const handleDetalleInputChange = (e) => {
    const {name, value }= e.target;
    setDetalleData({
      ...detalleData,
      [name]: value,
    })
  };

  const handleAgregarDetalle = (event) => {
   event.preventDefault();
    const subtotal = detalleData.PRECIO_UNITARIO * detalleData.CANTIDAD_PRODUCTO;

     //creamos una copia del objetod detalle
     const nuevosDetalles = [
        ...ventaData.detalles,
        { ...detalleData, SUBTOTAL_PRODUCTO: subtotal }
      ];
          setVentaData({
              ...ventaData,
              detalles: nuevosDetalles,
              SUBTOTAL_VENTA: ventaData.SUBTOTAL_VENTA + subtotal,
              IVA_VENTA: (ventaData.SUBTOTAL_VENTA + subtotal) * 0.13,
              TOTAL_VENTA: ventaData.SUBTOTAL_VENTA + (ventaData.SUBTOTAL_VENTA + subtotal) * 0.13 + subtotal,
          });

          setDetalleData({
            ID_PRODUCTO: '',
            CANTIDAD_PRODUCTO: 0,
            SUBTOTAL_PRODUCTO: 0,
            PRECIO_UNITARIO: 0,
          });
      };

        /* Functions */


        const navigate = useNavigate();

        useEffect(() => {
            getAllClientes();
            getAllProductos();
        }, []);

        const getAllClientes = async () => {
            const response = await axios.get(`${endpoint2}/clientes`);
            setClientes(response.data);
        };
        const getAllProductos = async () => {
            const response = await axios.get(`${endpoint2}/productos`);
            setProductos(response.data);

  };


 //Continua el createVentas
    const store = async (event)=>{
        event.preventDefault();
        await axios.post(endpoint, ventaData).then((response) => {
            console.log(response.data);
            // Realizar alguna acción después de enviar los datos
            navigate('/showVentas');
        }).catch((error) => {
            console.error(error);
            // Manejar el error
        });
    }
  return (
    <div className='bg-white'>
      <h4>Crear Venta</h4>
        <div className='container'>
          <form onSubmit={store}>
           <div className='col'>
              < div className="mb-3 row">
                 <label className="col-4 col-form-label">Cliente</label>
                    <div className="col-8">
                       <select
                        name="ID_CLIENTE"
                        className='form-select'
                        onChange={handleVentaInputChange}>
                        <option selected>-- Seleccione un Cliente --</option>
                          {clientes.map((cliente) => (
                             <option value={cliente.ID_CLIENTE}>{cliente.NOMBRE_CLIENTE}</option>
                             ))}
                          </select>
                          <small className="text-muted">ID Cliente</small>
                  </div>
                </div>
            </div>
              <div className="mb-3 row">
                            <label className="col-4 col-form-label">Descripción</label>
                            <div className="col-8">
                                <textarea
                                    name='DESCRIPCION_VENTA'
                                    value={ventaData.DESCRIPCION_VENTA}
                                    onChange={handleVentaInputChange}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Ingrese la descripcion</small>
                            </div>
                        </div>
              <div className='col'>
              <div className="mb-3 row">
                            <label className="col-4 col-form-label">Sub total</label>
                            <div className="col-8">
                                <input
                                    name='SUBTOTAL_VENTA'
                                    value={ventaData.SUBTOTAL_VENTA}
                                    onChange={handleVentaInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Sub total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">IVA</label>
                            <div className="col-8">
                                <input
                                    name='IVA_VENTA'
                                    value={ventaData.IVA_VENTA}
                                    onChange={handleVentaInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">IVA</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Total</label>
                            <div className="col-8">
                                <input
                                    name='TOTAL_VENTA'
                                    value={ventaData.TOTAL_VENTA}
                                    onChange={handleVentaInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Nombre cliente</label>
                            <div className="col-8">
                                <input
                                    name='NOMBRE_PERSONA'
                                    value={ventaData.NOMBRE_PERSONA}
                                    onChange={handleVentaInputChange}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Nombre cliente</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Direccion cliente</label>
                            <div className="col-8">
                                <input
                                    name='DIRECCION_PERSONA'
                                    value={ventaData.DIRECCION_PERSONA}
                                    onChange={handleVentaInputChange}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Guardar</button>

                                <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/showVentas')}>Cancelar</button>
                            </div>
                        </div>
            </div>
      </form>
      </div>
      <hr />
            <h6>Detalles Venta</h6>
            <div className="container">
                <form onSubmit={handleAgregarDetalle} className='d-flex'>
                    <div className='col'>
                        <div className="mb-3 row">
                            <div className="mb-3 row">
                                <label className="col-4 col-form-label">Producto</label>
                                <div className="col-8">
                                    <select
                                        name='ID_PRODUCTO'
                                        onChange={handleDetalleInputChange}
                                        className='form-select'>
                                        <option selected>-- Seleccione un Producto --</option>
                                        {productos.map((producto) => (
                                            <option value={producto.ID_PRODUCTO}>{producto.NOMBRE_PRODUCTO}</option>
                                        ))}
                                    </select>
                                    <small className="text-muted">Seleccióne un producto</small>
                                </div>
                            </div>
                            
                        </div>
                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Agregar producto</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cantidad</label>
                            <div className="col-8">
                                <input
                                    name='CANTIDAD_PRODUCTO'
                                    value={detalleData.CANTIDAD_PRODUCTO}
                                    onChange={handleDetalleInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Cantidad</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Precio unitario</label>
                            <div className="col-8">
                                <input
                                    name='PRECIO_UNITARIO'
                                    value={detalleData.PRECIO_UNITARIO}
                                    onChange={handleDetalleInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Precio unitario</small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <h6>Resumen detalles Ventas</h6>
            <div className="container">
                <table className="table mt-3">
                    <thead>
                        <th>Codigo</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub total</th>
                    </thead>
                    <tbody>
                        {ventaData.detalles.map((detalle, index) => (
                            <tr key={index}>
                                <td>{detalle.ID_PRODUCTO}</td>
                                <td>{detalle.CANTIDAD_PRODUCTO}</td>
                                <td>{detalle.PRECIO_UNITARIO}</td>
                                <td>{detalle.SUBTOTAL_PRODUCTO}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default CreateVentas
