import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const endpoint = 'http://localhost:8000/api/pedido/'

const EditPedido = () => {
    const [ID_CLIENTE, setID_CLIENTE] = useState('')
    const [DESCRIPCION_PEDIDO, setDESCRIPCION_PEDIDO] = useState('')
    const [TOTAL_PEDIDO, setTOTAL_PEDIDO] = useState(0)
    const [SUBTOTAL_PEDIDO, setSUBTOTAL_PEDIDO] = useState(0)
    const [IVA_PEDIDO, setIVA_PEDIDO] = useState(0)
    const [FECHA_PEDIDO, setFECHA_PEDIDO] = useState('');
    const [FECHA_ENTREGA_PEDIDO, setFECHA_ENTREGA_PEDIDO] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            ID_CLIENTE: ID_CLIENTE,
            DESCRIPCION_PEDIDO: DESCRIPCION_PEDIDO,
            TOTAL_PEDIDO: TOTAL_PEDIDO,
            SUBTOTAL_PEDIDO:SUBTOTAL_PEDIDO,
            IVA_PEDIDO:IVA_PEDIDO,
            FECHA_PEDIDO:FECHA_PEDIDO,
            FECHA_ENTREGA_PEDIDO:FECHA_ENTREGA_PEDIDO
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getPedidoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setID_CLIENTE(response.data.ID_CLIENTE || '')
            setDESCRIPCION_PEDIDO(response.data.DESCRIPCION_PEDIDO || '')
            setTOTAL_PEDIDO(response.data.TOTAL_PEDIDO || 0)
            setSUBTOTAL_PEDIDO(response.data.SUBTOTAL_PEDIDO || 0)
            setIVA_PEDIDO(response.data.IVA_PEDIDO || 0)
            setFECHA_PEDIDO(response.data.FECHA_PEDIDO || '')
            setFECHA_ENTREGA_PEDIDO(response.data.FECHA_ENTREGA_PEDIDO || '')
        }
        getPedidoById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Create Pedido</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>ID_CLIENTE</label>
                <input 
                    value={ID_CLIENTE}
                    onChange={ (e)=> setID_CLIENTE(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>DESCRIPCION_PEDIDO</label>
                <input 
                    value={DESCRIPCION_PEDIDO}
                    onChange={ (e)=> setDESCRIPCION_PEDIDO(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>TOTAL_PEDIDO</label>
                <input 
                    value={TOTAL_PEDIDO}
                    onChange={ (e)=> setTOTAL_PEDIDO(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>SUBTOTAL_PEDIDO</label>
                <input 
                    value={SUBTOTAL_PEDIDO}
                    onChange={ (e)=> setSUBTOTAL_PEDIDO(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>IVA_PEDIDO</label>
                <input 
                    value={IVA_PEDIDO}
                    onChange={ (e)=> setIVA_PEDIDO(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>FECHA_PEDIDO</label>
                <input 
                    value={FECHA_PEDIDO}
                    onChange={ (e)=> setFECHA_PEDIDO(e.target.value)}
                    type='date'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>FECHA_ENTREGA_PEDIDO</label>
                <input 
                    value={FECHA_ENTREGA_PEDIDO}
                    onChange={ (e)=> setFECHA_ENTREGA_PEDIDO(e.target.value)}
                    type='date'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
    )
}

export default EditPedido