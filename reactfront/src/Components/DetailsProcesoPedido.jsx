import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const endpoint = 'http://127.0.0.1:8000/api'

const DetailsProcesoPedido = () => {

    const notify = () => toast.success('Linea actualizada con exito', {
        position: 'top-right',
        style: {

            background: '#72F961',
            minWidth: '300px',
        }
    }
    );
    const errorNotify = () => toast.success('No se puedo actualizar la linea', {
        position: 'top-right',
        style: {

            background: '#FF0000',
            minWidth: '300px',
        }
    }
    );


    const navigate = useNavigate();
    const { id } = useParams();

    const [pedido, setPedido] = useState([])
    const [proceso, setProceso] = useState([])
    const [tempData, setTempData] = useState({
        ID_PEDIDO: '',
        ID_LINEA_PRODUCCION: 1
    })
    const [detallePedido, setDetallePedido] = useState([]);

    useEffect(() => {
        getPedido();
        getAllProcesos();
        getAllDetalles();
    }, []);


    const getPedido = async () => {
        const response = await axios.get(`${endpoint}/pedido/${id}`)
        setPedido(response.data)
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



    const avanzarLineaProduccion = (idLinea) => {
        try {
            let nuevaLineaProduccion = 1;
            if (idLinea !== 0) {
                if (idLinea === 1) {
                    nuevaLineaProduccion = idLinea + 1;
                    setProceso({
                        ...proceso,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion
                    });
                    setPedido({
                        ...pedido,
                        ID_ESTADO_PEDIDO: 3
                    });
                    updateLinea();
                } else if (idLinea === 7) {
                    nuevaLineaProduccion = idLinea + 1;
                    setProceso({
                        ...proceso,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion
                    });
                    setPedido({
                        ...pedido,
                        ID_ESTADO_PEDIDO: 4
                    });
                    updateLinea();
                } else {
                    nuevaLineaProduccion = idLinea + 1;
                    setProceso({
                        ...proceso,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion
                    });
                }
            } else {
                setTempData({
                    ...tempData,
                    ID_PEDIDO: id,
                    ID_LINEA_PRODUCCION: 1
                });
                setPedido({
                    ...pedido,
                    ID_ESTADO_PEDIDO: 2
                });
                storeProceso();
            }

        } catch (error) {
            console.error(error);
            // Manejar el error, si es necesario.
        }
    };

    const updateLinea = async () => {
        await axios.put(`${endpoint}/procesoPedido/${id}`, proceso).then((response) => {
            console.log(response.data);
            notify();
        }).catch((error) => {
            console.error(error);
            errorNotify();
            // Manejar el error
        });
    };
    const storeProceso = async () => {
        await axios.post(`${endpoint}/procesoPedido`, tempData).then((response) => {
            console.log(response.data);
            notify();
        }).catch((error) => {
            console.error(error);
            errorNotify();
            // Manejar el error
        });
    };

    const pasarARevision = () => {
        setProceso({
            ...proceso,
            ID_LINEA_PRODUCCION: 9
        });
        setPedido({
            ...pedido,
            ID_ESTADO_PEDIDO: 5
        });
        updateLinea();
    };

    const finalizarPedido = () => {
        setProceso({
            ...proceso,
            ID_LINEA_PRODUCCION: 10
        });
        setPedido({
            ...pedido,
            ID_ESTADO_PEDIDO: 6
        });
        updateLinea();
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
            <Toaster />
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
                        <button className='btn btn-outline-primary'>
                            Iniciar Producción
                        </button>
                    </p>
                    <p>
                        <button className='btn btn-outline-warning'>
                            Avanzar Línea
                        </button>
                    </p>
                    <p>
                        <button className='btn btn-outline-info'>
                            Revisar
                        </button>

                    </p>
                    <p>
                        <button className='btn btn-outline-success'>
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