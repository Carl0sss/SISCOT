import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/inventariomp'
const endpoint2 = 'http://localhost:8000/api/materiasprima/'

const EditMateriasPrimas = () => {
    const { id } = useParams()
    const [ID_MATERIA_PRIMA, setMateriaPrima] = useState(id);
    const [CANTIDAD_INVENTARIO_MP, setCantidadInventarios] = useState(0);
    const [tipo, setTipo] = useState('ingreso'); // Tipo por defecto: ingreso
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault();
        const detalles = [
            { FECHA: new Date().toISOString(), CANTIDAD: CANTIDAD_INVENTARIO_MP },
        ];
        await axios.post(endpoint, {
            ID_MATERIA_PRIMA: ID_MATERIA_PRIMA,
            CANTIDAD_INVENTARIO_MP: CANTIDAD_INVENTARIO_MP,
            tipo: tipo,
            detalles: detalles,
        })
        navigate('/showMateriasPrimas')
    }
    useEffect(() => {
        const getMateriasPrimasById = async () => {
            const response = await axios.get(`${endpoint2}${id}`)
            setMateriaPrima(response.data.ID_MATERIA_PRIMA)
            if (response.data.inventarios_materias_primas && response.data.inventarios_materias_primas.length > 0) {
                setCantidadInventarios(response.data.inventarios_materias_primas[0].CANTIDAD_INVENTARIO_MP)
            } else {
                setCantidadInventarios(0); // O cualquier otro valor por defecto que desees asignar
            }
        }
        getMateriasPrimasById()

    }, [])
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
                                    value={ID_MATERIA_PRIMA}
                                    onChange={(e) => setMateriaPrima(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    readOnly
                                />
                                <small className="text-muted">ID Materia prima</small>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-4 col-form-label">Cantidad</label>
                            <div className="col-8">
                                <input
                                    value={CANTIDAD_INVENTARIO_MP}
                                    onChange={(e) => setCantidadInventarios(e.target.value)}
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
                                <a className="btn btn-outline-secondary btn-lg" href="/showMateriasPrimas">
                                    Cancelar
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditMateriasPrimas