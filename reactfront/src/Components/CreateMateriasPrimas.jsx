import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/materiasprima/'
const endpoint2 = 'http://127.0.0.1:8000/api'

const CreateMateriasPrimas = () => {

    const [categoria, setCate] = useState([]);
    const [proveedor, setProveedo] = useState([]);

    const [ID_CATEGORIA_MP, setCategoria] = useState('')
    const [ID_PROVEEDOR, setProveedor] = useState('')
    const [NOMBRE_MATERI_PRIMA, setNombre] = useState('')
    const [DETALLES_MATERIA_PRIMA, setDetalles] = useState('')
    const [PRECIO_MATERIA_PRIMA, setPrecio] = useState(0)

    const getAllProveedores = async () => {
        const response = await axios.get(`${endpoint2}/proveedor`);
        setProveedo(response.data)
    }
    const getAllCategorias = async () => {
        const response = await axios.get(`${endpoint2}/categoriamp`);
        setCate(response.data)
    }

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            ID_CATEGORIA_MP: ID_CATEGORIA_MP,
            ID_PROVEEDOR: ID_PROVEEDOR,
            NOMBRE_MATERI_PRIMA: NOMBRE_MATERI_PRIMA,
            DETALLES_MATERIA_PRIMA: DETALLES_MATERIA_PRIMA,
            PRECIO_MATERIA_PRIMA: PRECIO_MATERIA_PRIMA
        })
        navigate('/showMateriasPrimas')
    }

    useEffect(() => {
        getAllCategorias();
        getAllProveedores();
    }, []);

    return (
        <div>
            <h3>Materia prima</h3>
            <form onSubmit={store}>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label className='form-label'>ID Categoria</label>
                        <select
                            className='form-select'
                            onChange={(e) => setCategoria(e.target.value)}>
                            <option selected>-- Seleccione una categoria --</option>
                            {categoria.map((cat) => (
                                <option value={cat.ID_CATEGORIA_MP}>{cat.NOMBRE_CATEGORIA_MP}</option>
                            ))}
                        </select>
                        <small className="form-text text-muted">ID Categoria</small>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>ID Proveedor</label>
                        <select
                                className='form-select'
                                onChange={(e) => setProveedor(e.target.value)}>
                                <option selected>-- Seleccione un Tipo --</option>
                                {proveedor.map((prov) => (
                                    <option value={prov.ID_PROVEEDOR}>{prov.NOMBRE_PROVEEDOR}</option>
                                ))}
                            </select>
                        <small className="form-text text-muted">ID Proveedor</small>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={NOMBRE_MATERI_PRIMA}
                            onChange={(e) => setNombre(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="form-text text-muted">Nombre materia prima</small>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Detalles</label>
                        <input
                            value={DETALLES_MATERIA_PRIMA}
                            onChange={(e) => setDetalles(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="form-text text-muted">Detalles materia prima</small>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Precio</label>
                        <input
                            value={PRECIO_MATERIA_PRIMA}
                            onChange={(e) => setPrecio(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="form-text text-muted">Precio unitario</small>
                    </div>
                </div>
                <div className="col-8">
                    <button type="submit" className="btn btn-primary mx-2">Guardar</button>
                    <button type="button" className="btn btn-outline-secondary mx-2" onClick={() => navigate('/showMateriasPrimas')}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default CreateMateriasPrimas