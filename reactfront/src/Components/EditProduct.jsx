import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/inventario';
const endpoint2 = 'http://127.0.0.1:8000/api/producto/';

const EditProduct = () => {
    const { id } = useParams();
    const [ID_PRODUCTO, setProducto] = useState(id);
    const [CANTIDAD_INVENTARIO_PRODUCTOS, setCantidadProductosT] = useState(0);
    const [tipo, setTipo] = useState('ingreso'); // Tipo por defecto: ingreso
    const navigate = useNavigate();


    const update = async (event) => {
        event.preventDefault();
        const detalles = [
            { FECHA: new Date().toISOString(), CANTIDAD: CANTIDAD_INVENTARIO_PRODUCTOS },
        ];
        await axios.post(endpoint, {
            ID_PRODUCTO: ID_PRODUCTO,
            CANTIDAD_INVENTARIO_PRODUCTOS: CANTIDAD_INVENTARIO_PRODUCTOS,
            tipo: tipo,
            detalles: detalles,
        });
        navigate('/showProductos');
    };

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint2}${id}`);
            setProducto(response.data.ID_PRODUCTO);

            if (response.data.inventario_productos && response.data.inventario_productos.length > 0) {
                setCantidadProductosT(response.data.inventario_productos[0].CANTIDAD_INVENTARIO_PRODUCTOS);
            } else {
                setCantidadProductosT(0); // O cualquier otro valor por defecto que desees asignar
            }
        };
        getProductById();
    }, []);

    return (
        <div>
            <h2>Editar Productos Terminados</h2>
            <div className="container">
                <form onSubmit={update} className="d-flex">
                    <div className="col">
                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Productos</label>
                            <div className="col-8">
                                <input
                                    value={ID_PRODUCTO}
                                    onChange={(e) => setProducto(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    readOnly
                                />
                                <small className="text-muted">ID Producto</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cantidad</label>
                            <div className="col-8">
                                <input
                                    value={CANTIDAD_INVENTARIO_PRODUCTOS}
                                    onChange={(e) => setCantidadProductosT(e.target.value)}
                                    type="number"
                                    className="form-control"
                                />
                                <small className="text-muted">Cantidad</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Tipo</label>
                            <div className="col-8">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tipo"
                                        value="ingreso"
                                        checked={tipo === 'ingreso'}
                                        onChange={() => setTipo('ingreso')}
                                    />
                                    <label className="form-check-label">Ingreso</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="tipo"
                                        value="egreso"
                                        checked={tipo === 'egreso'}
                                        onChange={() => setTipo('egreso')}
                                    />
                                    <label className="form-check-label">Egreso</label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Guardar
                                </button>
                                <a className="btn btn-outline-secondary btn-lg" href="/showProductos">
                                    Cancelar
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
