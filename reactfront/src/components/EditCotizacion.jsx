import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/cotizacion/'
const endpoint2 = 'http://127.0.0.1:8000/api'

const EditCotizacion = () => {

    const [clientes, setClientes] = useState([]);
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
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setCliente(response.data.ID_CLIENTE);
            setDescripcion(response.data.DESCRIPCION_COTIZACIOIN);
            setTotal(response.data.TOTAL_COTIZACION);
            setSubtotal(response.data.SUBTOTAL_COTIZACION);
            setIva(response.data.IVA_COTIZACION);
            setFechaI(response.data.FECHA_INGRESOS_COTIZACION);
            setFechaE(response.data.FECHA_ENTREGA_EST_COTIZACION);

        }
        getProductById();
        getAllClientes();
    }, []);

    return (
        <div>
            <h3>Editar cotización</h3>
            <div className="container">
                <form onSubmit={update} className='d-flex'>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cliente</label>
                            <div className="col-8">
                                <select
                                    className='form-select'
                                    onChange={(e) => setCliente(e.target.value)}>
                                    <option value={ID_CLIENTE} selected>{ID_CLIENTE}</option>
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
                                    value={DESCRIPCION_COTIZACIOIN}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Ingrese la descripcion</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Fecha</label>
                            <div className="col-8">
                                <input
                                    value={FECHA_INGRESOS_COTIZACION}
                                    onChange={(e) => setFechaI(e.target.value)}
                                    type='date'
                                    className='form-control'
                                />
                                <small className="text-muted">Fecha</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Fecha Entrega</label>
                            <div className="col-8">
                                <input
                                    value={FECHA_ENTREGA_EST_COTIZACION}
                                    onChange={(e) => setFechaE(e.target.value)}
                                    type='date'
                                    className='form-control'
                                />
                                <small className="text-muted">Fecha entrega</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                                <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/show')}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Total</label>
                            <div className="col-8">
                                <input
                                    value={TOTAL_COTIZACION}
                                    onChange={(e) => setTotal(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Sub Total</label>
                            <div className="col-8">
                                <input
                                    value={SUBTOTAL_COTIZACION}
                                    onChange={(e) => setSubtotal(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Sub Total</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">IVA</label>
                            <div className="col-8">
                                <input
                                    value={IVA_COTIZACION}
                                    onChange={(e) => setIva(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">IVA</small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCotizacion