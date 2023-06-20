import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowCotizaciones = () => {
    
    const [cotizaciones, setCotizaciones] = useState([]);

    useEffect(() => {
        getAllCotizaciones();
    }, []);

    const getAllCotizaciones = async () => {
        const response = await axios.get(`${endpoint}/cotizaciones`);

        setCotizaciones(response.data);
        
    };

    const deleteCotizacion = async (id) => {
        await axios.delete(`${endpoint}/cotizacion/${id}`);
        getAllCotizaciones();
    };

    return (
        <div className='bg-white'>
            <h2>Gestión de cotizaciones</h2>
            <hr />
            <div className='d-grid gap-2'>
                <Link to='/create' className='btn btn-success btn-lg mt-8 mb-3'>Crear Cotización</Link>
                <hr />
                <table className='table table-hover'>
                    <thead>
                        <th>Codigo</th>
                        <th>Cliente</th>
                        <th>Detalles</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {cotizaciones.map((cotizacion) => (
                            <tr key={cotizacion.ID_COTIZACION}>
                                <td>{cotizacion.ID_COTIZACION}</td>
                                <td>{cotizacion.ID_CLIENTE}</td>
                                <td>{cotizacion.DESCRIPCION_COTIZACIOIN}</td>
                                <td>{cotizacion.FECHA_INGRESOS_COTIZACION}</td>
                                <td>$ {cotizacion.TOTAL_COTIZACION}</td>
                                <td>
                                    <Link to={`/edit/${cotizacion.ID_COTIZACION}`} className='btn btn-warning'>Editar</Link>
                                    <button className='btn btn-danger' onClick={() => deleteCotizacion(cotizacion.ID_COTIZACION)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowCotizaciones