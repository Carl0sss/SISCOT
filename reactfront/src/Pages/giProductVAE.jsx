import React from 'react';
import './styles.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArrowLeft } from "react-icons/bs";
import { VscAdd, VscEdit, VscTrash } from 'react-icons/vsc';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
  { id: 1, nombre: "varillas", Categoria: "Metales", Cantidad: "12", PrecioUnitario: "2.50" },
  { id: 2, nombre: "Tablas", Categoria: "Madera", Cantidad: "20", PrecioUnitario: "1.25" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      Categoria: "",
      Cantidad: "",
      PrecioUnitario: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].Categoria = dato.Categoria;
        arreglo[contador].Cantidad = dato.Cantidad;
        arreglo[contador].PrecioUnitario = dato.PrecioUnitario;
      }
      contador++;
      return registro;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
        return registro;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        {/* Contenido principal */}
        <div className="content">
          {/* Header */}
          <div>
            {/* Espacio para el logo del proyecto */}
            {/* Menú de búsqueda */}
            <form align="center">
              <div className="app">
                <Navbar />
                {/* Resto del contenido de la aplicación */}
              </div>
            </form>
          </div>
          <body>
            <div id="contenedor">
              <div id="contenidos">
                <div id="columna1">
                  {/* Barra lateral */}
                  <Sidebar />
                </div>
              </div>
            </div>
          </body>
          <div className='menu-center'>
            <br />
            <Button id="boton-crear" color="success" onClick={() => this.mostrarModalInsertar()}>
              <VscAdd size={20}/> </Button>
            <br />
            <Container>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.nombre}</td>
                      <td>{dato.Categoria}</td>
                      <td>{dato.Cantidad}</td>
                      <td>{dato.PrecioUnitario}</td>
                      <td>
                        <Button id="boton-editar" color="primary" onClick={() => this.mostrarModalActualizar(dato)}>
                          <VscEdit size={20}/>
                        </Button>{" "}
                        <Button id="boton-eliminar" color="danger" onClick={() => this.eliminar(dato)}>
                          <VscTrash size={20} /> </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
            <Modal isOpen={this.state.modalActualizar}>
              <ModalHeader>
                <div><h3>Editar Registro</h3></div>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>
                    Id:
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Nombre:
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.nombre}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Categoria:
                  </label>
                  <input
                    className="form-control"
                    name="Categoria"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Categoria}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Cantidad:
                  </label>
                  <input
                    className="form-control"
                    name="Cantidad"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Cantidad}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Precio unitario:
                  </label>
                  <input
                    className="form-control"
                    name="PrecioUnitario"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.PrecioUnitario}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.editar(this.state.form)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.cerrarModalActualizar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
                <div><h3>Insertar Personaje</h3></div>
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <label>
                    Id:
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length + 1}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Nombre:
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Categoria:
                  </label>
                  <input
                    className="form-control"
                    name="Categoria"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Cantidad:
                  </label>
                  <input
                    className="form-control"
                    name="Cantidad"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Precio unitario:
                  </label>
                  <input
                    className="form-control"
                    name="PrecioUnitario"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          {/* Botón "Atrás" */}
          <button className="back-button"><BsArrowLeft /> Atrás</button>
        </div>
      </div>
    );
  }
}

export default App;
