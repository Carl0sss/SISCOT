import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { format } from 'date-fns';
import toast, { Toaster } from 'react-hot-toast';


const endpoint = 'http://127.0.0.1:8000/api'

const ShowCotizaciones = () => {

    const notify = () => toast.success('Cotización eliminada con exito', {
        position: 'top-right',
        style: {
            background: '#FA3834',
            minWidth: '300px',
        }
    }
    );

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
        notify();
        getAllCotizaciones();
    };

    return (
        <div className='bg-white'>
            <Toaster />
            <h2>Gestión de cotizaciones</h2>
            <hr />
            <div className='d-grid gap-2'>
                <Link to='/create' className='btn btn-success btn-lg mt-8 mb-3'><VscAdd size={24} /> Crear Cotización</Link>
                <hr />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Cliente</th>
                            <th>Detalles</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cotizaciones.map((cotizacion) => (
                            <tr key={cotizacion.ID_COTIZACION}>
                                <td>{cotizacion.ID_COTIZACION}</td>
                                <td>{cotizacion.ID_CLIENTE}</td>
                                <td>{cotizacion.DESCRIPCION_COTIZACIOIN}</td>
                                {/* <td>{cotizacion.FECHA_INGRESOS_COTIZACION}</td> */}
                                <td>{format(new Date(cotizacion.FECHA_INGRESOS_COTIZACION), 'dd-MM-yyyy')}</td>
                                <td>{cotizacion.TOTAL_COTIZACION}</td>
                                <td>
                                    <Link to={`/edit/${cotizacion.ID_COTIZACION}`} className='btn btn-warning mx-2'><VscEdit /> Editar</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteCotizacion(cotizacion.ID_COTIZACION)}><VscTrash /> Eliminar</button>
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