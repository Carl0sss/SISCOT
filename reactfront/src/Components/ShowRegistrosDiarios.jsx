import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api';

const ShowRegistros = () => {
  const [registros, setRegistros] = useState([])

  useEffect(() => {
    gellAllRegistros();
  }, []);

  const gellAllRegistros = async () => {
    const response = await axios.get(`${endpoint}/registrosD`);
    setRegistros(response.data);
  };

  const deleteRegistro = async (id) => {
    await axios.delete(`${endpoint}/registroD/${id}`)
    window.location.reload();
  };


  return (
    <div>
      <h2>Gestión de Registros diarios </h2>
      <hr />
      <div className='d-grid gap-2'>
        <Link to='/createRegistro' className='btn btn-success btn-lg mt-8 mb-3'><VscAdd size={24} /> Ingresar Registro</Link>
        <hr />
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Departamento</th>
              <th>Detalles</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro) => (
              <tr key={registro.ID_REGISTRODIA}>
                <td>{registro.NOMBRE_PRODUCTO}</td>
                <td>{registro.NOMBRE_DEPARTAMENTO}</td>
                <td>{registro.DETALLES_REGISTRO}</td>
                <td>{registro.FECHA.substring(0, 10)}</td>
                <td>
                  <Link to={`/editRegistro/${registro.ID_REGISTRODIA}`} className='btn btn-warning mx-2' ><VscEdit />Editar</Link>
                  <a className='btn btn-danger mx-2' onClick={() => deleteRegistro(registro.ID_REGISTRODIA)}><VscTrash />Borrar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowRegistros
