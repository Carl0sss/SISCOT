import './App.css';
import Navbar from './componentes/Navbar'
import Sidebar from './componentes/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowMateriasPrimas from './componentes/ShowMateriasPrimas';
import CreateMateriasPrimas from './componentes/CreateMateriasPrimas';
import EditMateriasPrimas from './componentes/EditMateriasPrimas';


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
                <h1 align="center">Gestión de Materias Primas</h1>
                <section className="menu-center">
                <h3>Tabla de Materias Primas</h3>
                <div className='App'>
                  <BrowserRouter>
                    <Routes>
                    <Route path='/' element={ <ShowMateriasPrimas/>}/>
                    <Route path='/create' element={ <CreateMateriasPrimas/>}/>
                    <Route path='/edit/:id' element={ <EditMateriasPrimas/>}/>    
                    </Routes>
                  </BrowserRouter>
                </div>
                </section>
                {/* Botón "Atrás" */}
                <button className="back-button"> Atrás</button>
              </div>
            </div>
          </div>
        </body>           
      </div>
    </div>
  )
}
export default App;

