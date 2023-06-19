import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

<<<<<<< HEAD

const NavBar = () => {


    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className="navbar-brand" href='/'>
                <img src={torogoz} alt="torogoz-brand-logo" className='logo-image'/>
            </a>
            <form className="d-flex my-2 my-lg-0 mx-auto" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar algo..." aria-label="Buscar" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div className="ml-auto">
                Usuario | <a href="#">Cerrar sesión</a>
            </div>
        </nav>
    )
}
=======

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="https://www.torogoz.com/wp-content/uploads/2017/05/torogoz_Mockup-10.png" alt="Logo del proyecto" width="238" height="72" className="fusion-mobile-logo" />          
        </div>
>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a

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