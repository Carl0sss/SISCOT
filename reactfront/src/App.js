import './App.css';
<<<<<<< HEAD
import NavBar from './components/NavBar';
=======
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import { BsArrowLeft } from "react-icons/bs";

//importando nuestros componentes
import ShowPedidos from './components/ShowPedidos';
import CreatePedido from './components/CreatePedido';
import EditPedido from './components/EditPedido';
import PedidoMenu from './components/PedidoMenu';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowCotizaciones from './components/ShowCotizaciones';
import CreateCotizacion from './components/CreateCotizacion';
import EditCotizacion from './components/EditCotizacion';
import VentasMenu from './components/VentasMenu';

{/*Para modal */}


const App = () => {
  return (
<<<<<<< HEAD

    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <SideBar /> */}

        <div className='d-flex mt-5 justify-content-center'>
          <Routes>
            <Route path='/' element={<VentasMenu />} />
            <Route path='/show' element={<ShowCotizaciones />} />
            <Route path='/create' element={<CreateCotizacion />} />
            <Route path='/edit/:id' element={<EditCotizacion />} />
=======
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
>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
