import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/productosT/'

const CreateProduct = () => {
    const [ID_INVENTARIO_PRODUCTOS, setProductosT] = useState('');
    const [ID_PRODUCTOS, setProducto] = useState('');
    const [CANTIDAD_INVENTARIO_PRODUCTOS, setCantidadProductosT] = useState(0);
    const navigate = useNavigate();

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, { ID_INVENTARIO_PRODUCTOS, ID_PRODUCTOS, CANTIDAD_INVENTARIO_PRODUCTOS});
        navigate('/');
    };
    
    return (
        <div>
            <h3>Registrar Producto</h3>
            <div className="container">
                <form onSubmit={store} className='d-flex'>
                    <div className='col'>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Inventario</label>
                            <div className="col-8">
                                <input
                                    value={ID_INVENTARIO_PRODUCTOS}
                                    onChange={(e) => setProductosT(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">ID Inventario</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Producto</label>
                            <div className="col-8">
                                <input
                                    value={ID_PRODUCTOS}
                                    onChange={(e) => setProductosT(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">ID Producto</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cantidad </label>
                            <div className="col-8">
                                <input
                                    value={CANTIDAD_INVENTARIO_PRODUCTOS}
                                    onChange={(e) => setCantidadProductosT(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Cantidad</small>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                                <a className='btn btn-outline-secundary btn-lg' href='/'> Cancelar</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct