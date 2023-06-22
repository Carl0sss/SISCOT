import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowPedidos = () => {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getAllPedidos()
    }, [])

    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`)
        setPedidos(response.data)
        //console.log(response.data)
    }

    const deletePedido = async (id) => {
        await axios.delete(`${endpoint}/pedido/${id}`)
        getAllPedidos()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/createPedido" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Description</th>
                        <th>Total</th>
                        <th>Subtotal</th>
                        <th>IVA</th>
                        <th>Fecha pedido</th>
                        <th>Fecha entrega</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.ID_CLIENTE}>
                            <td> {pedido.DESCRIPCION_PEDIDO} </td>
                            <td> {pedido.TOTAL_PEDIDO} </td>
                            <td> {pedido.SUBTOTAL_PEDIDO} </td>
                            <td> {pedido.IVA_PEDIDO} </td>
                            <td> {pedido.FECHA_PEDIDO} </td>
                            <td> {pedido.FECHA_ENTREGA_PEDIDO} </td>

                            <td>
                                <Link to={`/editPedido/${pedido.ID_PEDIDO}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deletePedido(pedido.ID_PEDIDO)} className='btn btn-danger'>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPedidos