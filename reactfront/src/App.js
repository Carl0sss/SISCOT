import './App.css';
import NavBar from './components/Navbar';
import SideBar from './components/Sidebar';
import { BsArrowLeft } from "react-icons/bs";

//importando nuestros componentes
import ShowPedidos from './components/ShowPedidos';
import CreatePedido from './components/CreatePedido';
import EditPedido from './components/EditPedido';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
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
              <NavBar />
              {/* Resto del contenido de la aplicación */}
            </div>
          </form>
        </div>
      <body>
        <div id="contenedor">
          <div id="contenidos">
            <div id="columna1">
              {/* Barra lateral */}
              <SideBar/>
            </div>
            <div id="columna2">
              {/* Título "Gestión de Inventario de Producto Terminado" */}
              <h1 align="center">Gestión de Inventarios</h1>
              <section className="menu-center">
              <h3>Tabla de Productos Finalizados</h3>
              <div className='App'>
                <BrowserRouter>
                  <Routes>
                  <Route path='/' element = {<ShowPedidos/>} />
                  <Route path='/create' element = {<CreatePedido/>} />
                  <Route path='/edit/:id' element = {<EditPedido/>} />    
                  </Routes>
                </BrowserRouter>
              </div>
              </section>
              {/* Botón "Atrás" */}
              <button className="back-button"><BsArrowLeft /> Atrás</button>
            </div>
          </div>
        </div>
      </body>           
    </div>
  </div>
  );
}

export default App;
