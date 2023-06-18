import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="https://www.torogoz.com/wp-content/uploads/2017/05/torogoz_Mockup-10.png" alt="Logo del proyecto" width="238" height="72" className="fusion-mobile-logo" />          
        </div>

        {/* Mensaje de bienvenida */}
        

        {/* Barra de búsqueda */}
        <div className="search-bar">
          <div className="search-input-container">
            <input type="text" placeholder="Buscar"/>
          </div>
          <button><FaSearch className="search-icon"/>Buscar</button>
        </div>
        <div className="welcome-message">¡Bienvenido <a>Usuario!</a></div>
      </div>
    </nav>
  );
};

export default Navbar;