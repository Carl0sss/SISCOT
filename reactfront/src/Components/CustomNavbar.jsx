import React from 'react';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
        <img src="https://www.torogoz.com/wp-content/uploads/2017/05/torogoz_Mockup-10.png" alt="Logo del proyecto" width="238" height="72" className="fusion-mobile-logo" />          
        </div>

        {/* Buscador */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
          <button>Buscar</button>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;