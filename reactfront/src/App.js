import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowCotizaciones from './components/ShowCotizaciones';
import CreateCotizacion from './components/CreateCotizacion';
import EditCotizacion from './components/EditCotizacion';
import VentasMenu from './components/VentasMenu';

function App() {
  return (

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
