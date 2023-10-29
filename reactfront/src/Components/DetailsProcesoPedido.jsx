import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const endpoint = 'http://127.0.0.1:8000/api';

const DetailsProcesoPedido = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pedido, setPedido] = useState([]);
    const [proceso, setProceso] = useState([]);
    const [detallePedido, setDetallePedido] = useState([]);
    const [tempData, setTempData] = useState({
        ID_PEDIDO: id,
        ID_LINEA_PRODUCCION: 1,
    });
    const [tempo, setTempo] = useState({
        ID_ESTADO_PEDIDO: 2,
    });

    const notify = () =>
        toast.success('Línea actualizada con éxito', {
            position: 'top-right',
            style: {
                background: '#72F961',
                minWidth: '300px',
            },
        });

    const errorNotify = () =>
        toast.error('No se pudo actualizar la línea', {
            position: 'top-right',
            style: {
                background: '#FF0000',
                minWidth: '300px',
            },
        });

    const [showIniciarProduccion, setShowIniciarProduccion] = useState(false);
    const [showAvanzarLinea, setShowAvanzarLinea] = useState(false);
    const [showRevisar, setShowRevisar] = useState(false);
    const [showFinalizar, setShowFinalizar] = useState(false);

    useEffect(() => {
        getPedido();
        getAllDetalles();
    }, []);

    useEffect(() => {
        getAllProcesos();
    }, [id]);

    const getPedido = async () => {
        try {
            const response = await axios.get(`${endpoint}/pedido/${id}`);
            setPedido(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllProcesos = async () => {
        try {
            const response = await axios.get(`${endpoint}/procesoPedido/${id}`);
            setProceso(response.data);
            setShowIniciarProduccion(response.data.length === 0);
            setShowAvanzarLinea(
                response.data.length > 0 &&
                pedido.ID_ESTADO_PEDIDO !== 4 &&
                pedido.ID_ESTADO_PEDIDO !== 5
            );
            setShowRevisar(pedido.ID_ESTADO_PEDIDO === 4);
            setShowFinalizar(pedido.ID_ESTADO_PEDIDO === 5);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllDetalles = async () => {
        try {
            const response = await axios.get(`${endpoint}/detallesPedido/${id}`);
            setDetallePedido(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const avanzarLineaProduccion = (idLinea) => {
        try {
            let nuevaLineaProduccion;
            if (idLinea !== 0) {
                if (idLinea === 1) {
                    nuevaLineaProduccion = idLinea + 1;
                    console.log(nuevaLineaProduccion)
                    setTempData({
                        ...tempData,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion,
                    });
                    setTempo({
                        ...tempo,
                        ID_ESTADO_PEDIDO: 3,
                    });
                    console.log(tempData)
                    console.log(tempo)
                    updateLinea();
                    updateState();
                } else if (idLinea === 7) {
                    nuevaLineaProduccion = idLinea + 1;
                    setTempData({
                        ...tempData,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion,
                    });
                    setTempo({
                        ...tempo,
                        ID_ESTADO_PEDIDO: 4,
                    });
                    updateLinea();
                    updateState();
                } else {
                    nuevaLineaProduccion = idLinea + 1;
                    setTempData({
                        ...tempData,
                        ID_LINEA_PRODUCCION: nuevaLineaProduccion,
                    });
                }
            } else {
                setTempData({
                    ...tempData,
                    ID_PEDIDO: id,
                    ID_LINEA_PRODUCCION: 1,
                });
                setTempo({
                    ...tempo,
                    ID_ESTADO_PEDIDO: 2,
                });
                storeProceso();
                updateState();
            }
        } catch (error) {
            console.error(error);
            // Manejar el error, si es necesario.
        }
    };

  /*   useEffect(() => {
        // Acciones dependientes del estado aquí
        console.log(tempData);
        console.log(tempo);
        updateLinea();
        updateState();
    }, [tempData, tempo]); */

    const updateLinea = async () => {
        try {
            await axios.put(`${endpoint}/procesoPedido/${id}`, tempData);
            notify();
        } catch (error) {
            console.error(error);
            errorNotify();
        }
    };

    const storeProceso = async () => {
        try {
            await axios.post(`${endpoint}/procesoPedido`, tempData);
            notify();
        } catch (error) {
            console.error(error);
            errorNotify();
        }
    };

    const updateState = async () => {
        try {
            await axios.put(`${endpoint}/pedidoUpdateState/${id}`, tempo);
            notify();
        } catch (error) {
            console.error(error);
            errorNotify();
        }
    };

    const pasarARevision = () => {
        setTempData({
            ...tempData,
            ID_LINEA_PRODUCCION: 9,
        });
        setTempo({
            ...tempo,
            ID_ESTADO_PEDIDO: 5,
        });
        updateLinea();
        updateState();
    };

    const finalizarPedido = () => {
        setTempData({
            ...tempData,
            ID_LINEA_PRODUCCION: 10,
        });
        setTempo({
            ...tempo,
            ID_ESTADO_PEDIDO: 6,
        });
        updateLinea();
        updateState();
    };

    /* FUNCTIONS */
    const formatDate = (dateString) => {
        if (dateString) {
            const newDate = new Date(dateString).toISOString().slice(0, 10);
            return newDate;
        }
        return 'Fecha no válida';
    };

    const cardStyle = {
        width: '18rem',
    };

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
                    {showIniciarProduccion && (
                        <p>
                            <button className='btn btn-outline-primary' onClick={() => avanzarLineaProduccion(0)}>
                                Iniciar Producción
                            </button>
                        </p>
                    )}
                    {showAvanzarLinea && (
                        <p>
                            <button className='btn btn-outline-warning' onClick={() => avanzarLineaProduccion(proceso[0].ID_LINEA_PRODUCCION)}>
                                Avanzar Línea
                            </button>
                        </p>
                    )}
                    {showRevisar && (
                        <p>
                            <button className='btn btn-outline-info' onClick={pasarARevision}>
                                Revisar
                            </button>
                        </p>
                    )}
                    {showFinalizar && (
                        <p>
                            <button className='btn btn-outline-success' onClick={finalizarPedido}>
                                Finalizar
                            </button>
                        </p>
                    )}
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col md-6'>
                    <p>Linea: </p>
                    <div className='card' style={cardStyle}>
                        <div className='card-body' >
                            {proceso.map((proces) => (
                                <b key={proces.ID_PROCESO}>{proces.linea_produccion ? proces.linea_produccion.NOMBRE_LINEA_PRODUCCION : 'Sin comenzar'}</b>
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

    );
};

export default DetailsProcesoPedido;
