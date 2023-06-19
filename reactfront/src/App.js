import './App.css';
import Navbar from './Componentes/Navbar';
import Sidebar from './Componentes/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProduct from './Componentes/ShowProduct';
import CreateProduct from './Componentes/CreateProduct';
import EditProduct from './Componentes/EditProduct';
import InvMenu from './Componentes/InvMenu';


const App = () => {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <SideBar /> */}
        <Sidebar/>
        <div className='d-flex mt-5 justify-content-center'>
          <Routes>
            <Route path='/' element={<InvMenu />} />
            <Route path='/show' element={<ShowProduct />} />
            <Route path='/create' element={<CreateProduct />} />
            <Route path='/edit/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;