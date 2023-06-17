import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowCotizaciones from './components/ShowCotizaciones';
import CreateCotizacion from './components/CreateCotizacion';
import EditCotizacion from './components/EditCotizacion';

import VentasMenu from './components/VentasMenu';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SideBar /> */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowCotizaciones />} />
            <Route path='/create' element={<CreateCotizacion />} />
            <Route path='/edit/:id' element={<EditCotizacion />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
