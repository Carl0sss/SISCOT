import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/venta';
const CreateVentas = () => {
    const [cliente,setCliente] = useState();
    const [descripcion,setDescripcion] = useState('');
    const [total,setTotal] = useState(0);
    const [subtotal,setSubtotal] = useState(0);
    const [iva,setIva] = useState(0);
    const [nombre,setNombre] = useState('');
    const [direccion,setDireccion] = useState('');
    const [fecha,setFecha] = useState('2022-12-31');
    const navigate = useNavigate();

    const store = (e)=>{
        e.preventDefault();
        axios.post(endpoint,{ID_CLIENTE: cliente, DESCRIPCION_VENTA: descripcion,TOTAL_VENTA:total, SUBTOTAL_VENTA:subtotal,IVA_VENTA:iva,NOMBRE_PERSONA:nombre,DIRECCION_PERSONA:direccion,FECHA_VENTA:fecha});
        navigate('/');
    }
  return (
    <div>
      <h3>Crear Venta</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
            <label className='form-label'>Cliente</label>
            <input value={cliente}
                    onChange={(e)=>setCliente(e.target.value)}
                    type='text'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Descripcion</label>
            <input value={descripcion}
                    onChange={(e)=>setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Total</label>
            <input value={total}
                    onChange={(e)=>setTotal(e.target.value)}
                    type='number'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Subtotal</label>
            <input value={subtotal}
                    onChange={(e)=>setSubtotal(e.target.value)}
                    type='number'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>IVA</label>
            <input value={iva}
                    onChange={(e)=>setIva(e.target.value)}
                    type='number'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Nombre</label>
            <input value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    type='text'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Direccion</label>
            <input value={direccion}
                    onChange={(e)=>setDireccion(e.target.value)}
                    type='text'
                    className='form-control'/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Fecha</label>
            <input value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                    type='text'
                    className='form-control'/>
        </div>
        <button type='submit' className='btn btn-primary'>Registrar venta</button>
      </form>
    </div>
  )
}

export default CreateVentas
