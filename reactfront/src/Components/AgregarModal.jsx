import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const AgregarModal = () => {
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
    const endpoint = 'http://127.0.0.1:8000/api/venta';
    axios.post(endpoint, {
      id_detalle_venta: form.id_detalle_venta,
      producto_id: form.producto_id,
      cantidad: form.cantidad,
    })
      .then(response => {
        // Manejo de la respuesta de la API
        console.log(response.data);
      })
      .catch(error => {
        // Manejo del error
        console.error(error);
      });

    // Cerrar el modal
    toggleModal();
  };

  return (
    <div>
      {/* Otros componentes y funciones aquí */}
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
            <Button type="submit" color="primary">Guardar</Button>{' '}
            <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AgregarModal;