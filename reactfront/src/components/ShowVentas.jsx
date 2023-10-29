import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowVentas = () => {
  const [ventas, setVentas] = useState([])

  useEffect(() => {
    gellAllVentas();
  }, []);

  const gellAllVentas = async () => {
    const response = await axios.get(`${endpoint}/ventas`);
    setVentas(response.data);
  };

  const deleteVenta = async (id) => {
    await axios.delete(`${endpoint}/venta/${id}`)
    window.location.reload();
  };


  return (
    <div>
      <h2>Gestión de Ventas</h2>
      <hr />
      <div className='d-grid gap-2'>
        <Link to='/createVenta' className='btn btn-success btn-lg mt-8 mb-3'><VscAdd size={24} /> Ingresar venta</Link>
        <hr />
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Descripcion</th>
              <th>Total venta</th>
              <th>Nombre persona</th>
              <th>Direccion cliente</th>
              <th>fecha</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.ID_VENTA}>
                <td>{venta.ID_CLIENTE}</td>
                <td>{venta.DESCRIPCION_VENTA}</td>
                <td>{venta.TOTAL_VENTA}</td>
                <td>{venta.NOMBRE_PERSONA}</td>
                <td>{venta.DIRECCION_PERSONA}</td>
                <td>{venta.FECHA_VENTA}</td>
                <td>
                  <Link to={`/editVenta/${venta.ID_VENTA}`} className='btn btn-warning mx-2' ><VscEdit />Editar</Link>
                  <a className='btn btn-danger mx-2' onClick={() => deleteVenta(venta.ID_VENTA)}><VscTrash />Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowVentas
