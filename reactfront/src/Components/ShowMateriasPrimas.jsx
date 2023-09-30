import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

import { Link } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api'

export const ShowMateriasPrimas = () => {
    const [materiasprimas, setMateriasPrimas] = useState([])

    useEffect(() => {
        getAllMateriasPrimas()
    }, [])

    const getAllMateriasPrimas = async () => {
        const response = await axios.get(`${endpoint}/materiasprimas`)
        setMateriasPrimas(response.data)
        //console.log(response.data)
    }

    const deleteMateriasPrimas = async (id) => {
        await axios.delete(`${endpoint}/materiasprima/${id}`)
        getAllMateriasPrimas()
    }

    return (
        <div>
            <h2>Gestión de materia prima</h2>
            <hr />
            <div className='d-grid gap-2'>
                <Link to="/createMateriasPrima" className='btn btn-success btn-lg mt-8 mb-3'><VscAdd size={24} /> Añadir materia prima</Link>
                <hr />
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>ID Materia prima</th>
                            <th>ID Proveedor</th>
                            <th>Nombre</th>
                            <th>Detalles</th>
                            <th>Cantidad</th>
                            <th>PRECIO</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materiasprimas.map((materiaprima) => (
                            <tr key={materiaprima.ID_MATERIA_PRIMA}>
                                <td>{materiaprima.ID_MATERIA_PRIMA}</td>
                                <td>{materiaprima.ID_PROVEEDOR}</td>
                                <td>{materiaprima.NOMBRE_MATERI_PRIMA}</td>
                                <td>{materiaprima.DETALLES_MATERIA_PRIMA}</td>
                                <td>{materiaprima.inventarios_materias_primas.length > 0 ? materiaprima.inventarios_materias_primas[0].CANTIDAD_INVENTARIO_MP : 'Sin inventario'}</td>
                                <td>${materiaprima.PRECIO_MATERIA_PRIMA}</td>
                                <td>
                                    <Link to={`/editMateriasPrima/${materiaprima.ID_MATERIA_PRIMA}`} className='btn btn-warning mx-2'><VscEdit /></Link>
                                    <button onClick={() => deleteMateriasPrimas(materiaprima.ID_MATERIA_PRIMA)} className='btn btn-danger mx-2'><VscTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ShowMateriasPrimas