import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/producto/'
const endpoint2 = 'http://127.0.0.1:8000/api'

const CreateProduct = () => {

    const [tipo, setTipo] = useState([]);
    const [ID_TIPO_PRODUCTO, setTipoProducto] = useState('');
    const [NOMBRE_PRODUCTO, setNombre] = useState('');
    const [DESCRIPCION_PRODUCTO, setDescripcion] = useState('');
    const [PRECIO_UNITARIO, setPrecio] = useState(0);

    const getAllTipos = async () => {
        const response = await axios.get(`${endpoint2}/tipoproducto`);
        setTipo(response.data)
    }

    const navigate = useNavigate();

    const store = async (event) => {
        event.preventDefault();
        await axios.post(endpoint, {
            ID_TIPO_PRODUCTO: ID_TIPO_PRODUCTO,
            NOMBRE_PRODUCTO: NOMBRE_PRODUCTO,
            DESCRIPCION_PRODUCTO: DESCRIPCION_PRODUCTO,
            PRECIO_UNITARIO: PRECIO_UNITARIO
        });
        navigate('/showProductos');
    };
    useEffect(() => {
        getAllTipos();
    }, []);

    return (
        <div>
            <h3>Registrar Producto</h3>
            <div className="container">
                <form onSubmit={store} className='d-flex row'>
                    <div className='col-md-6'>
                    <div className="mb-3">
                            <label className="form-label">Tipo producto</label>
                            <select
                                className='form-select'
                                onChange={(e) => setTipoProducto(e.target.value)}>
                                <option selected>-- Seleccione un Tipo --</option>
                                {tipo.map((tip) => (
                                    <option value={tip.ID_TIPO_PRODUCTO}>{tip.NOMBRE_TIPO_PRODUCTO}</option>
                                ))}
                            </select>
                            <small className="form-text text-muted">ID Tipo Producto</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                                <input
                                    value={NOMBRE_PRODUCTO}
                                    onChange={(e) => setNombre(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Nombre Producto</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripcion</label>
                                <textarea
                                    value={DESCRIPCION_PRODUCTO}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    type='text'
                                    className='form-control'
                                />
                                <small className="text-muted">Descripcion Producto</small>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Presio unitario </label>
                                <input
                                    value={PRECIO_UNITARIO}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    type='number'
                                    className='form-control'
                                />
                                <small className="text-muted">Presio unitario </small>
                        </div>

                    </div>
                    <div className="col-8">
                        <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                        <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/showProductos')}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct