import React from 'react';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import Sidebar from './Components/Sidebar';
import ShowVentas from './Components/ShowVentas';
import CreateVentas from './Components/CreateVentas';
import EditVentas from './Components/EditVentas';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AgregarModal from './Components/AgregarModal';

{/*Para modal */}


const App = () => {
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
                <CustomNavbar />
                {/* Resto del contenido de la aplicación */}
              </div>
            </form>
          </div>
        <body>
        <div id="contenedor">
          <div id="contenidos">
            <div id="columna1">
              {/* Barra lateral */}
              <Sidebar/>
            </div>
            <div id="columna2">
              {/* Título "Gestión de Inventario de Producto Terminado" */}
              <h2 align="center">Gestión de Ventas</h2>
              <section className="menu-center">
                {/* Menú con 4 botones */}
                <h3>Seleccione una opción para empezar</h3>
                <div className='App'>
                  <BrowserRouter>
                  <Routes>
                    <Route path='/showVentas' element={<ShowVentas/>}/>
                    <Route path='/createVentas' element={<CreateVentas/>}/>
                    <Route path='/editVentas/:id' element={<EditVentas/>}/>
                  </Routes>
                  </BrowserRouter>
                </div>
              </section>
            </div>
            <div>{/* div para el modal*/ }
            
          </div>{/*div para el modal */ }
          </div>
        </div>
        </body>
      </div>
    </div>
  );
};

export default App;
