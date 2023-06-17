import React from 'react';
import './getVentas.css';
import CustomNavbar from './Components/CustomNavbar';
import Sidebar from './Components/Sidebar';


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
                    <Route path='/' element={<ShowVentas/>}/>
                  </Routes>
                  </BrowserRouter>
                  </div>
              </section>
            </div>
          </div>
        </div>
        </body>
      </div>
    </div>
  );
};

export default App;
