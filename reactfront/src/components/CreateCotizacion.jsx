import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/cotizacion'

const CreateCotizacion = () => {
    const [ID_CLIENTE, setCliente] = useState('');
    const [DESCRIPCION_COTIZACIOIN, setDescripcion] = useState('');
    const [TOTAL_COTIZACION, setTotal] = useState(0);
    const [SUBTOTAL_COTIZACION, setSubtotal] = useState(0);
    const [IVA_COTIZACION, setIva] = useState(0);
    const [FECHA_INGRESOS_COTIZACION, setFechaI] = useState('');
    const [FECHA_ENTREGA_EST_COTIZACION, setFechaE] = useState('');
    const navigate = useNavigate();

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, { ID_CLIENTE, DESCRIPCION_COTIZACIOIN, TOTAL_COTIZACION, SUBTOTAL_COTIZACION, IVA_COTIZACION, FECHA_INGRESOS_COTIZACION, FECHA_ENTREGA_EST_COTIZACION });
        navigate('/show');
    };

    return (
        <div>
            <h3>Registrar cotización</h3>
            <div className="container">
                <form onSubmit={store} className='d-flex'>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cliente</label>
                            <div className="col-8">
                                <input
                                    value={ID_CLIENTE}
                                    onChange={(e) => setCliente(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">ID Cliente</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Descripción</label>
                            <div className="col-8">
                                <input
                                    value={DESCRIPCION_COTIZACIOIN}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Ingrese la descripcion</small>
                            </div>
                        </div>
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
                                <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                                <a className='btn btn-outline-secundary btn-lg' href='/show'>Cancelar</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCotizacion