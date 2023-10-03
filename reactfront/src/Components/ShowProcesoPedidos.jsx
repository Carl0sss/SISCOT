import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';
import { VscEye } from "react-icons/vsc";


const endpoint = 'http://127.0.0.1:8000/api'


const ShowProcesoPedidos = () => {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getAllPedidos()
    }, [])

    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`)
        setPedidos(response.data)
        //console.log(response.data)
    }

    return (
        <div>
            <h2>Seguimiento estado de pedidos en curso
            </h2>

            <div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripción</th>
                            <th>Fecha pedido</th>
                            <th>Fecha entrega</th>
                            <th>Estado</th>
                            <th>Linea</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((pedido) => (
                            <tr key={pedido.ID_PEDIDO}>
                                <td> {pedido.ID_PEDIDO} </td>
                                <td> {pedido.DESCRIPCION_PEDIDO} </td>
                                <td> {format(new Date(pedido.FECHA_PEDIDO), 'dd-MM-yyyy')} </td>
                                <td> {format(new Date(pedido.FECHA_ENTREGA_PEDIDO), 'dd-MM-yyyy')} </td>
                                <td><h5><span className='badge text-bg-danger'>Estado</span></h5></td>
                                <td>Linea</td>
                                <td>
                                    <Link to={`/DetailsProcesoPedido/${pedido.ID_PEDIDO}`} className='btn btn-primary mx-2'><VscEye /> Ver</Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowProcesoPedidos