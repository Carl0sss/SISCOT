import React, { useState } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar'
import ShowProducts from './Componentes/ShowProduct';
import CreateProduct from './Componentes/CreateProduct';
import EditProduct from './Componentes/EditProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

function App(){
  return(
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
                <h1 align="center">Gestión de Inventarios</h1>
                <section className="menu-center">
                <h3>Tabla de Productos Finalizados</h3>
                <div className='App'>
                  <BrowserRouter>
                    <Routes>
                      <Route path ='/' element={ <ShowProducts/>}/>
                      <Route path ='/create/' element ={<CreateProduct/>}/>
                      <Route path ='/edit/:id' element = {<EditProduct/>}/>      
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
  )
}
export default App;

