import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const DetailsProcesoPedido = () => {


    const navigate = useNavigate();
    const { id } = useParams();

    const [pedido, setPedido] = useState([])
    const [proceso, setProceso] = useState([])
    const [detallePedido, setDetallePedido] = useState([]);

    const [lineaProduccionActual, setLineaProduccionActual] = useState(0); // Inicialmente, la línea de producción es 0.
    const [estadoPedido, setEstadoPedido] = useState('');
    // Inicialmente, obtén el estado del pedido del objeto pedido.


    useEffect(() => {
        getPedido();
        getAllProcesos();
        getAllDetalles();
    }, []);


    const getPedido = async () => {
        const response = await axios.get(`${endpoint}/pedido/${id}`)
        setPedido(response.data)
        const a = response.data.estado_pedido.NOMBRE_ESTADO;
        setEstadoPedido(a);

        console.log(estadoPedido)
    }
    const getAllProcesos = async () => {
        const response = await axios.get(`${endpoint}/procesoPedido/${id}`)
        setProceso(response.data)
        console.log(response.data)
    }
    const getAllDetalles = async () => {
        const response = await axios.get(`${endpoint}/detallesPedido/${id}`);
        setDetallePedido(response.data);
    }

    const avanzarLineaProduccion = async () => {
        try {
            const response = await axios.put(`${endpoint}/pedido/avanzarLineaProduccion/${pedido.ID_PEDIDO}`);
            console.log(response.data); // Manejar la respuesta del servidor, si es necesario.
            // Actualiza el estado o realiza otras acciones necesarias.
        } catch (error) {
            console.error(error);
            // Manejar el error, si es necesario.
        }
    };

    const pasarARevision = async () => {
        try {
            const response = await axios.put(`${endpoint}/pedido/pasarARevision/${pedido.ID_PEDIDO}`);
            console.log(response.data); // Manejar la respuesta del servidor, si es necesario.
            // Actualiza el estado o realiza otras acciones necesarias.
        } catch (error) {
            console.error(error);
            // Manejar el error, si es necesario.
        }
    };

    const finalizarPedido = async () => {
        try {
            const response = await axios.put(`${endpoint}/pedido/finalizarPedido/${pedido.ID_PEDIDO}`);
            console.log(response.data); // Manejar la respuesta del servidor, si es necesario.
            // Actualiza el estado o realiza otras acciones necesarias.
        } catch (error) {
            console.error(error);
            // Manejar el error, si es necesario.
        }
    };



    /* FUNCTIONS */
    // Formatear las fechas en el formato deseado 'dd-MM-yyyy'
    /* Pendiente solucionar el error de la función format */
    const formatDate = (dateString) => {
        if (dateString) {
            const newDate = new Date(dateString).toISOString().slice(0, 10);
            /* const date = new Date(dateString);
            if (!isNaN(date.getTime())) {
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            } */
            return newDate;
        }
        return 'Fecha no válida';
    };

    const cardStyle = {
        width: '18rem',
    };

    /* Change the color of badges */
    function getBadgeClass(idEstadoPedido) {
        switch (idEstadoPedido) {
            case 1:
                return 'text-bg-danger';
            case 2:
                return 'text-bg-warning';
            case 3:
                return 'text-bg-secondary';
            case 4:
                return 'text-bg-info';
            case 5:
                return 'text-bg-primary';
            case 6:
                return 'text-bg-success';
            default:
                // Si el valor no coincide con ninguno de los casos anteriores, puedes proporcionar una clase predeterminada.
                return 'text-bg-default';
        }
    }


    return (
        <div className="container mt-5">
            <h2 className='mb-4'>Seguimiento proceso pedido Nº {pedido.ID_PEDIDO}</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <p>Descripción: {pedido.DESCRIPCION_PEDIDO}</p>
                    <p>Fecha de Pedido: {formatDate(pedido.FECHA_PEDIDO)}</p>
                    <p>Fecha de Entrega: {formatDate(pedido.FECHA_ENTREGA_PEDIDO)}</p>
                    <p>Estado: <span className={`badge ${getBadgeClass(pedido.ID_ESTADO_PEDIDO)}`}>
                        {pedido.estado_pedido ? pedido.estado_pedido.NOMBRE_ESTADO : 'Estado no definido'}
                    </span></p>

                </div>
                <div className='col-md-6'>
                    <p>
                        <button className='btn btn-outline-primary' onClick={avanzarLineaProduccion} disabled={estadoPedido !== 'No Iniciado' || lineaProduccionActual >= proceso.length - 1}>
                            Iniciar Producción
                        </button>
                    </p>
                    <p>
                        <button className='btn btn-outline-warning' onClick={avanzarLineaProduccion} disabled={estadoPedido !== 'En Proceso' || lineaProduccionActual >= proceso.length - 1}>
                            Avanzar Línea
                        </button>
                    </p>
                    <p>
                        <button className='btn btn-outline-info' onClick={pasarARevision} disabled={estadoPedido !== 'Revisión'}>
                            Revisar
                        </button>

                    </p>
                    <p>
                        <button className='btn btn-outline-success' onClick={finalizarPedido} disabled={estadoPedido !== 'Revisado'}>
                            Finalizar
                        </button>
                    </p>

                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col md-6'>
                    <p>Estandares:</p>
                    <p>Linea: </p>
                    <div className='card' style={cardStyle}>
                        <div className='card-body' >
                            {proceso.map((proces) => (
                                <p>{proces.linea_produccion ? proces.linea_produccion.NOMBRE_LINEA_PRODUCCION : 'Sin comenzar'}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col md-6'>
                    <p>Detalles: </p>
                    <div className='accordion accordion-flush" id="accordionFlushExample'>
                        {detallePedido.map((detalle) => (
                            <div className='accordion-item'>
                                <h2 className='accordion-header'>
                                    <button className='accordion-button collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        {detalle.ID_PRODUCTO}
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className='accordion-collapse collapse' data-bs-parent="#accordionFlushExample">
                                    <div className='accordion-body'>{detalle.ESPECIFICACIONES_PEDIDO}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <hr />
            <div className='row'>
                <button className='btn btn-secondary mx-2' onClick={() => navigate('/showProcesoPedidos')}>Regresar</button>
            </div>

        </div>
    )
}

export default DetailsProcesoPedido