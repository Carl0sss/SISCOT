import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

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
            <h2>Gestión de pedido</h2>
            <hr />
            <div className='d-grid gap-2'>
                <Link to="/createPedido" className='btn btn-success btn-lg mt-8 mb-3'>Registrar pedido</Link>
                <hr />
                <table className='table table-hover'>
                    <thead>
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
                                    <Link to={`/editPedido/${pedido.ID_PEDIDO}`} className='btn btn-warning mx-2'><VscEdit /> Edit</Link>
                                    <button onClick={() => deletePedido(pedido.ID_PEDIDO)} className='btn btn-danger mx-2'><VscTrash /> Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowPedidos