import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/inventario/'

const EditProduct = () => {

    const [ID_INVENTARIO_PRODUCTOS, setProductosT] = useState('');
    const [ID_PRODUCTO, setProducto] = useState('');
    const [CANTIDAD_INVENTARIO_PRODUCTOS, setCantidadProductosT] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams()

  const update = async (event) => { 
    event.preventDefault();
    await axios.put(`${endpoint}${id}`, { 
        ID_INVENTARIO_PRODUCTOS:ID_INVENTARIO_PRODUCTOS,
        ID_PRODUCTO:ID_PRODUCTO, 
        CANTIDAD_INVENTARIO_PRODUCTOS:CANTIDAD_INVENTARIO_PRODUCTOS})
    navigate('/')
  }

  useEffect(() => {
    const getProductById = async () =>{
      const response = await axios.get(`${endpoint}${id}`)
            setProductosT(response.data.ID_INVENTARIO_PRODUCTOS)
            setProducto(response.data.ID_PRODUCTO)
            setCantidadProductosT(response.data.CANTIDAD_INVENTARIO_PRODUCTOS)
    }
    getProductById();
  },[]);

  return (
    <div>
    <h2>Editar Productos Terminados</h2>
    <div className="container">
        <form onSubmit={update} className='d-flex'>
            <div className='col'>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Inventario</label>
                    <div className="col-8">
                        <input
                            value={ID_INVENTARIO_PRODUCTOS}
                            onChange={(e) => setProductosT(e.target.value)}
                            type='text'
                            className='form-control'/>
                        <small className="text-muted">ID Inventario</small>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Productos</label>
                    <div className="col-8">
                        <input
                            value={ID_PRODUCTO}
                            onChange={(e) => setProducto(e.target.value)}
                            type='text'
                            className='form-control'/>
                        <small className="text-muted">ID Producto</small>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Cantidad</label>
                    <div className="col-8">
                        <input
                            value={CANTIDAD_INVENTARIO_PRODUCTOS}
                            onChange={(e) => setCantidadProductosT(e.target.value)}
                            type='number'
                            className='form-control'
                        />
                        <small className="text-muted">Cantidad</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-8">
                        <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                        <a className='btn btn-outline-secundary btn-lg' href='/'> Cancelar</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}
export default EditProduct;