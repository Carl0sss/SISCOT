import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/registroD/';
const endpoint2 = 'http://127.0.0.1:8000/api';

const EditRegistrosDiarios = () => {
    const[departamentos, setDepartamentos]=useState([]);
    const[productos, setProductos] = useState([]);
    const[ID_PRODUCTO,setIdProducto]=useState('');
    const[ID_DEPARTAMENTO,setIdDepartamento]=useState('');
    const[DETALLES_REGISTRO,setDetallesRegistro]=useState('');
    const {id} = useParams();

    //En caso de habilitar cambio de Producto o Dpto.
    const handleRegistroInputChange = (e) => {
    };

    const navigate = useNavigate();

    useEffect(() => {
    getAllDepartamentos();
    getAllProductos();
    const getProductById = async () =>{
        const response = await axios.get(`${endpoint}${id}`)
        setIdProducto(response.data.ID_PRODUCTO)
        setIdDepartamento(response.data.ID_DEPARTAMENTO)
        setDetallesRegistro(response.data.DETALLES_REGISTRO)
        }
    getProductById();
    }, []);


    const getAllProductos = async () => {
        const response = await axios.get(`${endpoint2}/productos`);
        setProductos(response.data);
    };

    const getAllDepartamentos = async () => {
        const response = await axios.get(`${endpoint2}/departamentos`);
        setDepartamentos(response.data);
    };

    const update = async (event) => { 
        event.preventDefault();
        await axios.put(`${endpoint}${id}`, { 
            ID_PRODUCTO:ID_PRODUCTO,
            ID_DEPARTAMENTO:ID_DEPARTAMENTO,
            DETALLES_REGISTRO:DETALLES_REGISTRO,})
        navigate('/')
      }

    return (
        <div className='bg-white'>
            <h4>Editar Registro de actividad diaria</h4>
            <div className='container'>
                <form onSubmit={update}>
                    <div className='col'>
                        <div className='mb-3 row'>
                            <label className='col-4 col-form-label'>Producto</label>
                            <div className='col-8'>
                                <select
                                    name='ID_PRODUCTO'
                                    className='form-select'
                                    onChange={handleRegistroInputChange}
                                    disabled={true}
                                >
                                    <option value=''>{ID_PRODUCTO}</option>
                                    {productos.map((producto) => (
                                        <option key={producto.ID_PRODUCTO} value={producto.ID_PRODUCTO}>
                                            {producto.NOMBRE_PRODUCTO}
                                        </option>
                                    ))}
                                </select>
                                <small className='text-muted'>ID Producto</small>
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <label className='col-4 col-form-label'>Departamento</label>
                            <div className='col-8'>
                                <select
                                    name='ID_DEPARTAMENTO'
                                    className='form-select'
                                    onChange={handleRegistroInputChange}
                                    disabled={true}
                                >
                                    <option value=''>{ID_DEPARTAMENTO}</option>
                                    {departamentos.map((departamento) => (
                                        <option key={departamento.ID_DEPARTAMENTO} value={departamento.ID_DEPARTAMENTO}>
                                            {departamento.NOMBRE_DEPARTAMENTO}
                                        </option>
                                    ))}
                                </select>
                                <small className='text-muted'>ID Departamento</small>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3 row'>
                        <label className='col-4 col-form-label'>Descripción</label>
                        <div className='col-8'>
                            <textarea
                                name='DETALLES_REGISTRO'
                                value={DETALLES_REGISTRO}
                                onChange={(e) =>setDetallesRegistro(e.target.value)}
                                type='text'
                                className='form-control'
                            />
                            <small className='text-muted'>Ingrese la descripción</small>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='mb-3 row'>
                            <div className='col-8'>
                                <button type='submit' className='btn btn-primary'>
                                    Guardar
                                </button>
                                <button
                                    type='button'
                                    className='btn btn-outline-secondary mx-2'
                                    onClick={() => navigate('/')}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            
        </div>
    );
};

export default EditRegistrosDiarios;