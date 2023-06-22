import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
/* import toast, { Toaster } from 'react-hot-toast'; */

const endpoint = 'http://127.0.0.1:8000/api/cotizacion'
const endpoint2 = 'http://127.0.0.1:8000/api'

const CreateCotizacion = () => {
    /* const notify = () => toast.success('Cotización creada con exito', {
        position: 'top-right',
        style: {

            background: '#72F961',
            minWidth: '300px',
        }
    }
    ); */

    const [productos, setProductos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [cotizacionData, setCotizacionData] = useState({
        ID_CLIENTE: '',
        DESCRIPCION_COTIZACIOIN: '',
        detalles: [],
        SUBTOTAL_COTIZACION: 0,
        IVA_COTIZACION: 0,
        TOTAL_COTIZACION: 0,
        FECHA_INGRESOS_COTIZACION: new Date(),
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
            TOTAL_COTIZACION: cotizacionData.SUBTOTAL_COTIZACION + (cotizacionData.SUBTOTAL_COTIZACION + subtotal) * 0.13 + subtotal,
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
        /* notify(); */
        await axios.post(endpoint, cotizacionData).then((response) => {
            console.log(response.data);
            navigate('/show');
        }).catch((error) => {
            console.error(error);
            // Manejar el error
        });
    };

    return (
        <div className='bg-white'>
            <h4>Registrar cotización</h4>
            {/* <Toaster /> */}
            <div className="container">
                <form onSubmit={store} className='d-flex row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Cliente</label>
                            <select
                                name="ID_CLIENTE"
                                className='form-select'
                                onChange={handleCotizacionInputChange}>
                                <option selected>-- Seleccione un Cliente --</option>
                                {clientes.map((cliente) => (
                                    <option value={cliente.ID_CLIENTE}>{cliente.NOMBRE_CLIENTE}</option>
                                ))}
                            </select>
                            <small className="form-text text-muted">ID Cliente</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea
                                name='DESCRIPCION_COTIZACIOIN'
                                value={cotizacionData.DESCRIPCION_COTIZACIOIN}
                                onChange={handleCotizacionInputChange}
                                type='text'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Ingrese la descripcion</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha entrega</label>
                            <input
                                name='FECHA_ENTREGA_EST_COTIZACION'
                                value={cotizacionData.FECHA_ENTREGA_EST_COTIZACION}
                                onChange={handleCotizacionInputChange}
                                type='date'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Fecha estimada de entrega</small>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="mb-3">
                            <label className="form-label">Sub total</label>
                            <input
                                name='SUBTOTAL_COTIZACION'
                                value={cotizacionData.SUBTOTAL_COTIZACION}
                                onChange={handleCotizacionInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">Sub total</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">IVA</label>
                            <input
                                name='IVA_COTIZACION'
                                value={cotizacionData.IVA_COTIZACION}
                                onChange={handleCotizacionInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">IVA</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total</label>
                            <input
                                name='TOTAL_COTIZACION'
                                value={cotizacionData.TOTAL_COTIZACION}
                                onChange={handleCotizacionInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">Total</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                        <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/show')}>Cancelar</button>
                    </div>
                </form>
            </div>
            <hr />
            <h6>Detalles Cotización</h6>
            <div className="container">
                <form onSubmit={handleAgregarDetalle} className='d-flex row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Producto</label>
                            <select
                                name='ID_PRODUCTO'
                                onChange={handleDetalleInputChange}
                                className='form-select'>
                                <option selected>-- Seleccione un Producto --</option>
                                {productos.map((producto) => (
                                    <option value={producto.ID_PRODUCTO}>{producto.NOMBRE_PRODUCTO} - {producto.PRECIO_UNITARIO}</option>
                                ))}
                            </select>
                            <small className="form-text text-muted">Seleccióne un producto</small>
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">Especificaciones</label>
                            <textarea
                                name='ESPECIFICACIONES_COTIZACION'
                                value={detalleData.ESPECIFICACIONES_COTIZACION}
                                onChange={handleDetalleInputChange}
                                type='text'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Ingrese la descripcion</small>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="mb-3">
                            <label className="form-label">Cantidad</label>
                            <input
                                name='CANTIDAD_COTIZACION'
                                value={detalleData.CANTIDAD_COTIZACION}
                                onChange={handleDetalleInputChange}
                                type='number'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Cantidad</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio unitario</label>
                            <input
                                name='PRECIO_UNITARIO'
                                value={detalleData.PRECIO_UNITARIO}
                                onChange={handleDetalleInputChange}
                                type='number'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Precio unitario</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Agregar producto</button>
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