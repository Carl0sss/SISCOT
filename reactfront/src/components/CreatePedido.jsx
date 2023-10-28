import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/pedido'
const endpoint2 = 'http://127.0.0.1:8000/api'

const CreatePedido = () => {

    const [productos, setProductos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [pedidoData, setPedidoData] = useState({
        ID_CLIENTE: '',
        DESCRIPCION_PEDIDO: '',
        detalles: [],
        SUBTOTAL_PEDIDO: 0,
        IVA_PEDIDO: 0,
        TOTAL_PEDIDO: 0,
        FECHA_PEDIDO: new Date(),
        FECHA_ENTREGA_PEDIDO: ''
    });
    /* Detalles pedido object */
    const [detalleData, setDetalleData] = useState({
        ID_PRODUCTO: '',
        ESPECIFICACIONES_PEDIDO: '',
        CANTIDAD: 0,
        PRECIO_UNITARIO: 0,
        SUBTOTA_PRODUCTO: 0
    });

    /* Inserting data  */
    const handlePedidoInputChange = (e) => {
        setPedidoData({
            ...pedidoData,
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

        const subtotal = parseFloat(detalleData.PRECIO_UNITARIO) * parseInt(detalleData.CANTIDAD);

        setPedidoData({
            ...pedidoData,
            detalles: [...pedidoData.detalles, { ...detalleData, SUBTOTA_PRODUCTO: subtotal }],
            SUBTOTAL_PEDIDO: pedidoData.SUBTOTAL_PEDIDO + subtotal,
            IVA_PEDIDO: (pedidoData.SUBTOTAL_PEDIDO + subtotal) * 0.13,
            TOTAL_PEDIDO: pedidoData.SUBTOTAL_PEDIDO + (pedidoData.SUBTOTAL_PEDIDO + subtotal) * 0.13 + subtotal,
        });

        setDetalleData({
            ID_PRODUCTO: '',
            ESPECIFICACIONES_PEDIDO: '',
            CANTIDAD: 0,
            PRECIO_UNITARIO: 0,
            SUBTOTA_PRODUCTO: 0,
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
        await axios.post(endpoint, pedidoData).then((response) => {
            console.log(response.data);
            // Realizar alguna acción después de enviar los datos
            navigate('/showPedidos');
        }).catch((error) => {
            console.error(error);
            // Manejar el error
        });
    };


    return (
        <div className='bg-white'>
            <h4>Registrar cotización</h4>
            <div className="container">
                <form onSubmit={store} className='d-flex row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Cliente</label>
                            <select
                                name="ID_CLIENTE"
                                className='form-select'
                                onChange={handlePedidoInputChange}>
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
                                name='DESCRIPCION_PEDIDO'
                                value={pedidoData.DESCRIPCION_PEDIDO}
                                onChange={handlePedidoInputChange}
                                type='text'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Ingrese la descripcion</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Fecha entrega</label>
                            <input
                                name='FECHA_ENTREGA_PEDIDO'
                                value={pedidoData.FECHA_ENTREGA_PEDIDO}
                                onChange={handlePedidoInputChange}
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
                                name='SUBTOTAL_PEDIDO'
                                value={pedidoData.SUBTOTAL_PEDIDO}
                                onChange={handlePedidoInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">Sub total</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">IVA</label>
                            <input
                                name='IVA_PEDIDO'
                                value={pedidoData.IVA_PEDIDO}
                                onChange={handlePedidoInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">IVA</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total</label>
                            <input
                                name='TOTAL_PEDIDO'
                                value={pedidoData.TOTAL_PEDIDO}
                                onChange={handlePedidoInputChange}
                                type='number'
                                className='form-control'
                                readOnly
                            />
                            <small className="form-text text-muted">Total</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                        <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/showPedidos')}>Cancelar</button>
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
                                name='ESPECIFICACIONES_PEDIDO'
                                value={detalleData.ESPECIFICACIONES_PEDIDO}
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
                                name='CANTIDAD'
                                value={detalleData.CANTIDAD}
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
                        {pedidoData.detalles.map((detalle, index) => (
                            <tr key={index}>
                                <td>{detalle.ID_PRODUCTO}</td>
                                <td>{detalle.ESPECIFICACIONES_PEDIDO}</td>
                                <td>{detalle.CANTIDAD}</td>
                                <td>{detalle.PRECIO_UNITARIO}</td>
                                <td>{detalle.SUBTOTA_PRODUCTO}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CreatePedido