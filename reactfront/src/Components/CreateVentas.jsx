import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

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


    //Para modal ---------------------------------------
    const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    id_detalle_venta: "",
    producto_id: "",
    cantidad: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para almacenar los datos del formulario en la base de datos
  
    axios.post('http://127.0.0.1:8000/api/detalleventa', {
      ID_VENTA: form.id_detalle_venta,
      ID_PRODUCTO: form.producto_id,
      CANTIDA_PRODUCTO: form.cantidad,
      SUBTOTAL_PRODUCTO:form.subtotal
    })
      .then(response => {
        // Manejo de la respuesta
        console.log(response.data);
      })
      .catch(error => {
        // Manejo del error
        console.error(error);
      });

    // Cerrar el modal
    toggleModal();
  };
 //Para modal ---------------------------------------

 //Continua el createVentas
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
      <div>
      <div>
      {/* Otros componentes y funciones de modal aqui */}
      <Button onClick={toggleModal}>Mostrar modal</Button>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Almacenar Detalle de Venta</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="id_detalle_venta">ID Detalle Venta:</Label>
              <Input
                type="text"
                name="id_detalle_venta"
                id="id_detalle_venta"
                value={form.id_detalle_venta}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="producto_id">ID Producto:</Label>
              <Input
                type="text"
                name="producto_id"
                id="producto_id"
                value={form.producto_id}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cantidad">Cantidad:</Label>
              <Input
                type="text"
                name="cantidad"
                id="cantidad"
                value={form.cantidad}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cantidad">Subtotal:</Label>
              <Input
                type="text"
                name="cantidad"
                id="cantidad"
                value={form.subtotal}
                onChange={handleChange}
              />
            </FormGroup>
            <Button type="submit" color="primary">Guardar</Button>{' '}
            <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
          </form>
        </ModalBody>
      </Modal>
     {/* Fin del modal*/} 
    </div>
      </div>
    </div>
  )
}

export default CreateVentas
