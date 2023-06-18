import React from 'react';
import './styles.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar';
import { BsArrowLeft } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { VscPackage } from "react-icons/vsc";

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
                <h2 align="center">Gestión de Inventarios</h2>
                <section className="menu-center">
                  {/* Menú con 4 botones */}
                  {/* Agregar las cards */}
                  <div className="card-container">
                    <div className="card">
                      <VscTools size={80} />
                      <button className="back-button">Materia prima</button>
                    </div>
                    <div className="card">
                      <VscPackage size={80} />
                      <button className="back-button">Productos Terminados</button>
                    </div>
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
};

export default App;
