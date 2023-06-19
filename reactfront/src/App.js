import './App.css';
import Sidebar from './components/Sidebar';
//import { BsArrowLeft } from "react-icons/bs";

//importando nuestros componentes
import ShowPedidos from './components/ShowPedidos';
import CreatePedido from './components/CreatePedido';
import EditPedido from './components/EditPedido';
import PedidoMenu from './components/PedidoMenu';

import { BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <SideBar /> */}
        <Sidebar/>
        <div className='d-flex mt-5 justify-content-center'>
          <Routes>
            <Route path='/' element={<PedidoMenu />} />
            <Route path='/show' element = {<ShowPedidos/>} />
            <Route path='/create' element = {<CreatePedido/>} />
            <Route path='/edit/:id' element = {<EditPedido/>} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
