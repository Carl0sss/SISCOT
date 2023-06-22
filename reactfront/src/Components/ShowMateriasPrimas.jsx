import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api'

export const ShowMateriasPrimas = () => {
    const [ materiasprimas, setMateriasPrimas] = useState( [] )

    useEffect ( ()=>{
        getAllMateriasPrimas()
    }, [])

    const getAllMateriasPrimas = async() => {
        const response = await axios.get(`${endpoint}/materiasprimas`)
        setMateriasPrimas(response.data)
        //console.log(response.data)
    }

    const deleteMateriasPrimas = async(id) => {
        await axios.delete(`${endpoint}/materiasprima/${id}`)
        getAllMateriasPrimas()
    }

  return (
    <div>
        <div className='d-grip gap-2'>
            <Link to="/createMateriasPrima" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>ID Categoria</th>
                    <th>ID Proveedor</th>
                    <th>Nombre</th>
                    <th>Detalles</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {materiasprimas.map( (materiaprima) => (
                    <tr key={materiaprima.ID_MATERIA_PRIMA}>
                        <td>{materiaprima.ID_CATEGORIA_MP}</td>
                        <td>{materiaprima.ID_PROVEEDOR}</td>
                        <td>{materiaprima.NOMBRE_MATERI_PRIMA}</td>
                        <td>{materiaprima.DETALLES_MATERIA_PRIMA}</td>
                        <td>{materiaprima.PRECIO_MATERIA_PRIMA}</td>
                        <td>
                            <Link to={`/edit/${materiaprima.ID_MATERIA_PRIMA}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteMateriasPrimas(materiaprima.ID_MATERIA_PRIMA)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default ShowMateriasPrimas