import './App.css';
import Navbar from './componentes/Navbar'
import Sidebar from './componentes/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowMateriasPrimas from './componentes/ShowMateriasPrimas';
import CreateMateriasPrimas from './componentes/CreateMateriasPrimas';
import EditMateriasPrimas from './componentes/EditMateriasPrimas';
import MateriaPrimaMenu from './componentes/MateriasPrimaMenu';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <SideBar /> */}
        <Sidebar/>
        <div className='d-flex mt-5 justify-content-center'>
          <Routes>
            <Route path='/' element={ <MateriaPrimaMenu/>}/>
            <Route path='/show' element={ <ShowMateriasPrimas/>}/>
            <Route path='/create' element={ <CreateMateriasPrimas/>}/>
            <Route path='/edit/:id' element={ <EditMateriasPrimas/>}/>  
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;