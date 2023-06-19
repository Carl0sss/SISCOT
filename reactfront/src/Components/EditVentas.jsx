import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const endpoint = 'http://127.0.0.1:8000/api/venta/'

const EditVentas = () => {

    const [ID_CLIENTE,setCliente] = useState('')
    const [DESCRIPCION_VENTA,setDescripcion] = useState('')
    const [TOTAL_VENTA,setTotal] = useState(0)
    const [SUBTOTAL_VENTA,setSubtotal] = useState(0)
    const [IVA_VENTA,setIva] = useState(0);
    const [NOMBRE_PERSONA,setNombre] = useState('')
    const [DIRECCION_PERSONA,setDireccion] = useState('')
    const [FECHA_VENTA,setFecha] = useState('2022-12-31')
    const navigate = useNavigate()
    const {id} = useParams()

  const update = async (event) => { 
    event.preventDefault();
    await axios.put(`${endpoint}${id}`, { 
        ID_CLIENTE:ID_CLIENTE,
        DESCRIPCION_VENTA:DESCRIPCION_VENTA,
        TOTAL_VENTA:TOTAL_VENTA, 
        SUBTOTAL_VENTA:SUBTOTAL_VENTA,
        IVA_VENTA:IVA_VENTA,
        NOMBRE_PERSONA:NOMBRE_PERSONA,
        DIRECCION_PERSONA:DIRECCION_PERSONA,
        FECHA_VENTA:FECHA_VENTA })
    navigate('/')
  }

  useEffect(() => {
    const getProductById = async () =>{
      const response = await axios.get(`${endpoint}${id}`)
            setCliente(response.data.ID_CLIENTE)
            setDescripcion(response.data.DESCRIPCION_VENTA)
            setTotal(response.data.TOTAL_VENTA)
            setSubtotal(response.data.SUBTOTAL_VENTA)
            setIva(response.data.IVA_VENTA)
            setNombre(response.data.NOMBRE_PERSONA)
            setDireccion(response.data.DIRECCION_PERSONA)
            setFecha(response.data.FECHA_VENTA)

    }
    getProductById();
  },[]);
//*---------------
//*--------------
  return (
    <div>
    <h3>Editar cotización</h3>
    <div className="container">
        <form onSubmit={update} className='d-flex'>
            <div className='col'>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Cliente</label>
                    <div className="col-8">
                        <input
                            value={ID_CLIENTE}
                            onChange={(e) => setCliente(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="text-muted">ID Cliente</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Descripción</label>
                    <div className="col-8">
                        <input
                            value={DESCRIPCION_VENTA}
                            onChange={(e) => setDescripcion(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="text-muted">Ingrese la descripcion</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Total</label>
                    <div className="col-8">
                        <input
                            value={TOTAL_VENTA}
                            onChange={(e) => setTotal(e.target.value)}
                            type='number'
                            className='form-control'
                        />
                        <small className="text-muted">Total</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Sub Total</label>
                    <div className="col-8">
                        <input
                            value={SUBTOTAL_VENTA}
                            onChange={(e) => setSubtotal(e.target.value)}
                            type='number'
                            className='form-control'
                        />
                        <small className="text-muted">Sub Total</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">IVA</label>
                    <div className="col-8">
                        <input
                            value={IVA_VENTA}
                            onChange={(e) => setIva(e.target.value)}
                            type='number'
                            className='form-control'
                        />
                        <small className="text-muted">IVA</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Nombre</label>
                    <div className="col-8">
                        <input
                            value={NOMBRE_PERSONA}
                            onChange={(e) => setNombre(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="text-muted">Nombre</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Direccion</label>
                    <div className="col-8">
                        <input
                            value={DIRECCION_PERSONA}
                            onChange={(e) => setDireccion(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                        <small className="text-muted">Direccion</small>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-4 col-form-label">Fecha</label>
                    <div className="col-8">
                        <input
                            value={FECHA_VENTA}
                            onChange={(e) => setFecha(e.target.value)}
                            type='date'
                            className='form-control'
                        />
                        <small className="text-muted">Fecha</small>
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
        <div>
             {/* Otros componentes y funciones de modal aqui */}
      
     {/* Fin del modal*/} 
        </div>
    </div>
</div>
  )
}
export default EditVentas