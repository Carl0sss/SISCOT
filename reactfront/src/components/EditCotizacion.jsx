import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/cotizacion/'
const endpoint2 = 'http://127.0.0.1:8000/api'

const EditCotizacion = () => {

    const [clientes, setClientes] = useState([]);
    const [productos, setProductos] = useState([]);
    const [detalleCotizacion, setDetalleCotizacion] = useState([]);

    const [ID_CLIENTE, setCliente] = useState('');
    const [DESCRIPCION_COTIZACIOIN, setDescripcion] = useState('');
    const [TOTAL_COTIZACION, setTotal] = useState(0);
    const [SUBTOTAL_COTIZACION, setSubtotal] = useState(0);
    const [IVA_COTIZACION, setIva] = useState(0);
    const [FECHA_INGRESOS_COTIZACION, setFechaI] = useState('');
    const [FECHA_ENTREGA_EST_COTIZACION, setFechaE] = useState('');


    const navigate = useNavigate();
    const { id } = useParams();


    const getAllClientes = async () => {
        const response = await axios.get(`${endpoint2}/clientes`);
        setClientes(response.data);
    };
    const getAllProductos = async () => {
        const response = await axios.get(`${endpoint2}/productos`);
        setProductos(response.data);

    }

    const update = async (event) => {
        event.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            ID_CLIENTE: ID_CLIENTE,
            DESCRIPCION_COTIZACIOIN: DESCRIPCION_COTIZACIOIN,
            TOTAL_COTIZACION: TOTAL_COTIZACION,
            SUBTOTAL_COTIZACION: SUBTOTAL_COTIZACION,
            IVA_COTIZACION: IVA_COTIZACION,
            FECHA_INGRESOS_COTIZACION: FECHA_INGRESOS_COTIZACION,
            FECHA_ENTREGA_EST_COTIZACION: FECHA_ENTREGA_EST_COTIZACION
        });
        navigate('/show');
    }

    useEffect(() => {
        const getCotizacionById = async () => {
            const response = await axios.get(`${endpoint}${id}`)

            const fechaEntregaEst = new Date(response.data.FECHA_ENTREGA_EST_COTIZACION).toISOString().slice(0, 10);
            setCliente(response.data.ID_CLIENTE);
            setDescripcion(response.data.DESCRIPCION_COTIZACIOIN);
            setTotal(response.data.TOTAL_COTIZACION);
            setSubtotal(response.data.SUBTOTAL_COTIZACION);
            setIva(response.data.IVA_COTIZACION);
            /* setFechaI(response.data.FECHA_INGRESOS_COTIZACION); */
            setFechaE(fechaEntregaEst);
        }
        getCotizacionById();
        getAllClientes();
        getAllProductos();
    }, []);

    return (
        <div>
            <h3>Editar cotización</h3>
            <div className="container">
                <form onSubmit={update} className='d-flex row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Cliente</label>
                            <select
                                className='form-select'
                                onChange={(e) => setCliente(e.target.value)}>
                                <option value={ID_CLIENTE} selected>{ID_CLIENTE}</option>
                                {clientes.map((cliente) => (
                                    <option value={cliente.ID_CLIENTE}>{cliente.NOMBRE_CLIENTE}</option>
                                ))}
                            </select>
                            <small className="form-text text-muted">ID Cliente</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea
                                value={DESCRIPCION_COTIZACIOIN}
                                onChange={(e) => setDescripcion(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Ingrese la descripcion</small>
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">Fecha</label>
                            <input
                                value={FECHA_INGRESOS_COTIZACION}
                                onChange={(e) => setFechaI(e.target.value)}
                                type='date'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Fecha</small>
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Fecha Entrega</label>
                            <input
                                value={FECHA_ENTREGA_EST_COTIZACION}
                                onChange={(e) => setFechaE(e.target.value)}
                                type='date'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Fecha entrega</small>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="mb-3">
                            <label className="form-label">Total</label>
                            <input
                                value={TOTAL_COTIZACION}
                                onChange={(e) => setTotal(e.target.value)}
                                type='number'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Total</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sub Total</label>
                            <input
                                value={SUBTOTAL_COTIZACION}
                                onChange={(e) => setSubtotal(e.target.value)}
                                type='number'
                                className='form-control'
                            />
                            <small className="form-text text-muted">Sub Total</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">IVA</label>
                            <input
                                value={IVA_COTIZACION}
                                onChange={(e) => setIva(e.target.value)}
                                type='number'
                                className='form-control'
                            />
                            <small className="form-text text-muted">IVA</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                        <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/show')}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCotizacion