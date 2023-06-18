import React from 'react';
import './styles.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar';
import { IoMdClipboard } from 'react-icons/io';
import { VscAdd, VscEdit, VscTrash } from 'react-icons/vsc';
import { BsArrowLeft } from "react-icons/bs";

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
                <h2 align="center">Gestión de Inventario de Producto Terminado</h2>
                <section className="menu-center">
                  {/* Menú con 4 botones */}
                  <h3>Seleccione una opción para empezar</h3>
                  <div>
                    {/* Botón "Ingresar un producto al inventario" */}
                    <button>
                      <VscAdd size={24} /> Ingresar un producto al inventario
                    </button>
                  </div>
                  <div>
                    {/* Botón "Actualizar información de un producto" */}
                    <button>
                      <VscEdit size={24} /> Actualizar información de un producto
                    </button>
                  </div>
                  <div>
                    {/* Botón "Ver detalles del inventario" */}
                    <button>
                      <IoMdClipboard size={24} /> Ver detalles del inventario
                    </button>
                  </div>
                  <div>
                    {/* Botón "Dar de baja un producto del inventario" */}
                    <button>
                      <VscTrash size={24} /> Dar de baja un producto del inventario
                    </button>
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
