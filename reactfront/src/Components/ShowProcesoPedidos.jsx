import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { VscEye } from "react-icons/vsc";

const endpoint = 'http://127.0.0.1:8000/api';

const ShowProcesoPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [procesoMap, setProcesoMap] = useState({});

    useEffect(() => {
        getAllPedidos();
        getAllProcesos();
    }, []);

    const getAllProcesos = async () => {
        const response = await axios.get(`${endpoint}/procesoPedidos`);
        const procesoData = response.data;
        const map = {};
        procesoData.forEach((proces) => {
            map[proces.ID_PEDIDO] = proces.linea_produccion ? proces.linea_produccion.NOMBRE_LINEA_PRODUCCION : 'Sin comenzar';
        });
        setProcesoMap(map);
    };

    
    const getAllPedidos = async () => {
        const response = await axios.get(`${endpoint}/pedidos`);
        setPedidos(response.data);
    }

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
                return 'text-bg-default';
        }
    }

    return (
        <div>
            <h2>Seguimiento estado de pedidos en curso</h2>
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
                                <td>{pedido.ID_PEDIDO}</td>
                                <td>{pedido.DESCRIPCION_PEDIDO}</td>
                                <td>{format(new Date(pedido.FECHA_PEDIDO), 'dd-MM-yyyy')}</td>
                                <td>{format(new Date(pedido.FECHA_ENTREGA_PEDIDO), 'dd-MM-yyyy')}</td>
                                <td>
                                    <h5>
                                        <span className={`badge ${getBadgeClass(pedido.ID_ESTADO_PEDIDO)}`}>
                                            {pedido.estado_pedido.NOMBRE_ESTADO}
                                        </span>
                                    </h5>
                                </td>
                                <td>{procesoMap[pedido.ID_PEDIDO]}</td>
                                <td>
                                    <Link to={`/DetailsProcesoPedido/${pedido.ID_PEDIDO}`} className='btn btn-primary mx-2'><VscEye /> Ver</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowProcesoPedidos;
