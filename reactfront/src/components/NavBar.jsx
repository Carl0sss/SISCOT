import React from 'react'
import torogoz from '../images/torogoz-l.png'

const NavBar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className="navbar-brand" href="">
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

export default NavBar