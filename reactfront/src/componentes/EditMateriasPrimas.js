import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/materiasprima/'

const EditMateriasPrimas = () => {
    const [ID_CATEGORIA_MP, setCategoria] = useState('')
    const [ID_PROVEEDOR, setProveedor] = useState('')
    const [NOMBRE_MATERI_PRIMA, setNombre] = useState('')
    const [DETALLES_MATERIA_PRIMA, setDetalles] = useState('')
    const [PRECIO_MATERIA_PRIMA, setPrecio] = useState(0)
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async(e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            ID_CATEGORIA_MP: ID_CATEGORIA_MP, ID_PROVEEDOR: ID_PROVEEDOR, NOMBRE_MATERI_PRIMA: DETALLES_MATERIA_PRIMA, DETALLES_MATERIA_PRIMA: DETALLES_MATERIA_PRIMA, PRECIO_MATERIA_PRIMA: PRECIO_MATERIA_PRIMA
        })
        navigate('/')
    }
    useEffect(( )=>{
        const getMateriasPrimasById = async () =>{
            const response = await axios.get(`${endpoint}${id}`)
            setCategoria(response.data.ID_CATEGORIA_MP)
            setProveedor(response.data.ID_PROVEEDOR)
            setNombre(response.data.NOMBRE_MATERI_PRIMA)
            setDetalles(response.data.DETALLES_MATERIA_PRIMA)
            setPrecio(response.data.PRECIO_MATERIA_PRIMA)
        }
        getMateriasPrimasById()

    }, []) 
  return (
    <div>
        <h3>Editar</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>ID Categoria</label>
                <input
                    value={ID_CATEGORIA_MP}
                    onChange={(e)=> setCategoria(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>ID Proveedor</label>
                <input
                    value={ID_PROVEEDOR}
                    onChange={(e)=> setProveedor(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                    value={NOMBRE_MATERI_PRIMA}
                    onChange={(e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Detalles</label>
                <input
                    value={DETALLES_MATERIA_PRIMA}
                    onChange={(e)=> setDetalles(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input
                    value={PRECIO_MATERIA_PRIMA}
                    onChange={(e)=> setPrecio(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>update</button>
        </form>
    </div>
  )
}

export default EditMateriasPrimas