import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { format } from 'date-fns';

const endpoint = 'http://127.0.0.1:8000/api'

const DetailsProcesoPedido = () => {

    const { id } = useParams();

    const [pedido, setPedido] = useState({})

    useEffect(() => {
        getPedido()
    }, [])

    const getPedido = async () => {
        const response = await axios.get(`${endpoint}/pedido/${id}`)
        setPedido(response.data)
        console.log(response.data)
    }

    /* FUNCTIONS */
    // Formatear las fechas en el formato deseado 'dd-MM-yyyy'
    /* Pendiente solucionar el error de la función format */
    const formatDate = (dateString) => {
        if (dateString) {
            const date = new Date(dateString);
            if (!isNaN(date.getTime())) {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            }
        }
        return 'Fecha no válida';
    };

    const cardStyle = {
        width: '18rem',
    };


    return (
        <div>
            <h2>Seguimiento proceso pedido Nº {pedido.ID_PEDIDO}</h2>
            <h3>Descripción: {pedido.DESCRIPCION_PEDIDO}</h3>
            <h3>Fecha de Pedido: {formatDate(pedido.FECHA_PEDIDO)}</h3>
            <h3>Fecha de Entrega: {formatDate(pedido.FECHA_ENTREGA_PEDIDO)}</h3>
            <h3>Estado: <span className='badge text-bg-danger'>Estado</span></h3>
            <h3>Linea: </h3>
            <div className='card' style={cardStyle}>
                <div className='card-body' >
                    <h4>Linea numero cuatro</h4>
                </div>
            </div>

        </div>
    )
}

export default DetailsProcesoPedido