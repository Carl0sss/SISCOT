import React from 'react';
import './getProducts.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar';
import ShowProduct from './Componentes/ShowProduct';
import CreateProduct from './Componentes/CreateProduct';
import EditProduct from './Componentes/EditProduct';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

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
              <Sidebar/>
            </div>
            <div id="columna2">
              {/* Título "Gestión de Inventario de Producto Terminado" */}
              <h2 align="center">Gestión de Productos</h2>
              <section className="menu-center">
                {/* Menú con 4 botones */}
                <h3>Seleccione una opción para empezar</h3>
                <div className='App'>
                  <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<ShowProduct/>}/>
                    <Route path='/create' element={<CreateProduct/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>
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