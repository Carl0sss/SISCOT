import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/cotizacion'
const endpoint2 = 'http://127.0.0.1:8000/api'

const CreateCotizacion = () => {
    const [productos, setProductos] = useState([]);
    const [clientes, setClientes] = useState([]);
    /*     const [ID_CLIENTE, setCliente] = useState('');
        const [DESCRIPCION_COTIZACIOIN, setDescripcion] = useState('');
        const [TOTAL_COTIZACION, setTotal] = useState(0);
        const [SUBTOTAL_COTIZACION, setSubtotal] = useState(0);
        const [IVA_COTIZACION, setIva] = useState(0);
        const [FECHA_INGRESOS_COTIZACION, setFechaI] = useState('');
        const [FECHA_ENTREGA_EST_COTIZACION, setFechaE] = useState(''); */

    /* Cotización object */
    const [cotizacionData, setCotizacionData] = useState({
        ID_CLIENTE: '',
        DESCRIPCION_COTIZACIOIN: '',
        detalles: [],
        SUBTOTAL_COTIZACION: 0,
        IVA_COTIZACION: 0,
        TOTAL_COTIZACION: 0,
        FECHA_INGRESOS_COTIZACION: '',
        FECHA_ENTREGA_EST_COTIZACION: ''
    });

    /* Detalles cotización object */
    const [detalleData, setDetalleData] = useState({
        ID_PRODUCTO: '',
        ESPECIFICACIONES_COTIZACION: '',
        CANTIDAD_COTIZACION: 0,
        PRECIO_UNITARIO: 0,
        SUBTOTA_COTIZACION: 0
    });

    /* Inserting data  */
    const handleCotizacionInputChange = (e) => {
        setCotizacionData({
            ...cotizacionData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDetalleInputChange = (e) => {
        const { name, value } = e.target;
        setDetalleData({
            ...detalleData,
            [name]: value,
        });
    };

    const handleAgregarDetalle = (event) => {
        event.preventDefault();

        const subtotal = parseFloat(detalleData.PRECIO_UNITARIO) * parseInt(detalleData.CANTIDAD_COTIZACION);

        setCotizacionData({
            ...cotizacionData,
            detalles: [...cotizacionData.detalles, { ...detalleData, SUBTOTA_COTIZACION: subtotal }],
            SUBTOTAL_COTIZACION: cotizacionData.SUBTOTAL_COTIZACION + subtotal,
            IVA_COTIZACION: (cotizacionData.SUBTOTAL_COTIZACION + subtotal) * 0.13,
            TOTAL_COTIZACION: cotizacionData.SUBTOTAL_COTIZACION + (cotizacionData.SUBTOTAL_COTIZACION + subtotal) * 0.13,
        });

        setDetalleData({
            ID_PRODUCTO: '',
            ESPECIFICACIONES_COTIZACION: '',
            CANTIDAD_COTIZACION: 0,
            PRECIO_UNITARIO: 0,
            SUBTOTA_COTIZACION: 0,
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

    }

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, cotizacionData).then((response) => {
            console.log(response.data);
            // Realizar alguna acción después de enviar los datos
            navigate('/show');
        }).catch((error) => {
            console.error(error);
            // Manejar el error
        });
    };

    return (
        <div className='bg-white'>
            <h4>Registrar cotización</h4>
            <div className="container">
                <form onSubmit={store} className='d-flex'>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cliente</label>
                            <div className="col-8">
                                <select
                                    name="ID_CLIENTE"
                                    className='form-select'
                                    onChange={handleCotizacionInputChange}>
                                    <option selected>-- Seleccione un Cliente --</option>
                                    {clientes.map((cliente) => (
                                        <option value={cliente.ID_CLIENTE}>{cliente.NOMBRE_CLIENTE}</option>
                                    ))}
                                </select>
                                <small className="text-muted">ID Cliente</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Descripción</label>
                            <div className="col-8">
                                <textarea
                                    name='DESCRIPCION_COTIZACIOIN'
                                    value={cotizacionData.DESCRIPCION_COTIZACIOIN}
                                    onChange={handleCotizacionInputChange}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Ingrese la descripcion</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Fecha cotización</label>
                            <div className="col-8">
                                <input
                                    name='FECHA_INGRESOS_COTIZACION'
                                    value={cotizacionData.FECHA_INGRESOS_COTIZACION}
                                    onChange={handleCotizacionInputChange}
                                    type='date'
                                    className='form-control'
                                />
                                <small className="text-muted">Fecha cotización</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Fecha entrega</label>
                            <div className="col-8">
                                <input
                                    name='FECHA_ENTREGA_EST_COTIZACION'
                                    value={cotizacionData.FECHA_ENTREGA_EST_COTIZACION}
                                    onChange={handleCotizacionInputChange}
                                    type='date'
                                    className='form-control'
                                />
                                <small className="text-muted">Fecha estimada de entrega</small>
                            </div>
                        </div>
                    </div>
                    <div className='col'>

                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Sub total</label>
                            <div className="col-8">
                                <input
                                    name='SUBTOTAL_COTIZACION'
                                    value={cotizacionData.SUBTOTAL_COTIZACION}
                                    onChange={handleCotizacionInputChange}
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
                                    name='IVA_COTIZACION'
                                    value={cotizacionData.IVA_COTIZACION}
                                    onChange={handleCotizacionInputChange}
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
                                    name='TOTAL_COTIZACION'
                                    value={cotizacionData.TOTAL_COTIZACION}
                                    onChange={handleCotizacionInputChange}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Guardar</button>

                                <button className="btn btn-outline-secondary" href='/show'>Cancelar</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <hr />
            <h6>Detalles Cotización</h6>
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
                            <label className="col-4 col-form-label">Especificaciones</label>
                            <div className="col-8">
                                <textarea
                                    name='ESPECIFICACIONES_COTIZACION'
                                    value={detalleData.ESPECIFICACIONES_COTIZACION}
                                    onChange={handleDetalleInputChange}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Ingrese la descripcion</small>
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
                                    name='CANTIDAD_COTIZACION'
                                    value={detalleData.CANTIDAD_COTIZACION}
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
            <h6>Resumen detalles cotización</h6>
            <div className="container">
                <table className="table mt-3">
                    <thead>
                        <th>Codigo</th>
                        <th>Especificaciones</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub total</th>
                    </thead>
                    <tbody>
                        {cotizacionData.detalles.map((detalle, index) => (
                            <tr key={index}>
                                <td>{detalle.ID_PRODUCTO}</td>
                                <td>{detalle.ESPECIFICACIONES_COTIZACION}</td>
                                <td>{detalle.CANTIDAD_COTIZACION}</td>
                                <td>{detalle.PRECIO_UNITARIO}</td>
                                <td>{detalle.SUBTOTA_COTIZACION}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CreateCotizacion