import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/registroD';
const endpoint2 = 'http://127.0.0.1:8000/api';

const CreateRegistrosDiarios = () => {
    const[departamentos, setDepartamentos]=useState([]);
    const [productos, setProductos] = useState([]);
    const [registroData, setRegistroData] = useState({
        ID_PRODUCTO: '',
        ID_DEPARTAMENTO: '',
        DETALLES_REGISTRO: '',
    });

    const handleRegistroInputChange = (e) => {
        setRegistroData({
            ...registroData,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    useEffect(() => {
        getAllDepartamentos();
        getAllProductos();
    }, []);


    const getAllProductos = async () => {
        const response = await axios.get(`${endpoint2}/productos`);
        setProductos(response.data);
    };

    const getAllDepartamentos = async () => {
        const response = await axios.get(`${endpoint2}/departamentos`);
        setDepartamentos(response.data);
    };

    const store = async (event) => {
        event.preventDefault();
        await axios
            .post(endpoint, registroData)
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='bg-white'>
            <h4>Crear Registro de actividad diaria</h4>
            <div className='container'>
                <form onSubmit={store}>
                    <div className='col'>
                        <div className='mb-3 row'>
                            <label className='col-4 col-form-label'>Producto</label>
                            <div className='col-8'>
                                <select
                                    name='ID_PRODUCTO'
                                    className='form-select'
                                    onChange={handleRegistroInputChange}
                                >
                                    <option value=''>-- Seleccione un Producto --</option>
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
                                >
                                    <option value=''>-- Seleccione un Departamento --</option>
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
                                value={registroData.DETALLES_REGISTRO}
                                onChange={handleRegistroInputChange}
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

export default CreateRegistrosDiarios;
