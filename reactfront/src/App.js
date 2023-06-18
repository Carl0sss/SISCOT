import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

//importando nuestros componentes
import ShowPedidos from './components/ShowPedidos';
import CreatePedido from './components/CreatePedido';
import EditPedido from './components/EditPedido';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
      <NavBar />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<ShowPedidos/>} />
          <Route path='/create' element = {<CreatePedido/>} />
          <Route path='/edit/:id' element = {<EditPedido/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
