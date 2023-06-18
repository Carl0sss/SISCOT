import React,{useEffect,useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint ='http://127.0.0.1:8000/api'

const ShowVentas = () => {
    const [ventas, setVentas] = useState([])
    
    useEffect ( ()=> {
        gellAllVentas();
    }, []);

    const gellAllVentas = async ()=>{
        const response = await axios.get(`${endpoint}/ventas`);
        setVentas(response.data);
      };

    const deleteVenta = async (id)=>{
    await axios.delete(`${endpoint}/venta/${id}`)
    window.location.reload();
  };
  
  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
      </div>
      <table className='table table-striped'>
        <thead className='bg-primary text white'>
            <tr>
                <th>Cliente</th>
                <th>Descripcion</th>
                <th>Total venta</th>
                <th>Subtotal venta</th>
                <th>Iva ventas</th>
                <th>Nombre persona</th>
                <th>Direccion cliente</th>
                <th>fecha</th>
            </tr>
        </thead>
        <tbody>
            {ventas.map((venta) => (
                <tr key={venta.ID_VENTA}>
                    <td>{venta.ID_CLIENTE}</td>
                    <td>{venta.DESCRIPCION_VENTA}</td>
                    <td>{venta.TOTAL_VENTA}</td>
                    <td>{venta.SUBTOTAL_VENTA}</td>
                    <td>{venta.IVA_VENTA}</td>
                    <td>{venta.NOMBRE_PERSONA}</td>
                    <td>{venta.DIRECCION_PERSONA}</td>
                    <td>{venta.FECHA_VENTA}</td>
                    <td>
                        <Link to={`/edit/${venta.ID_VENTA}`} className='btn btn-warning'>Editar</Link>
                        <button onClick={ ()=>deleteVenta(venta.ID_VENTA)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowVentas
