import React from 'react'
import torogoz from '../images/logo.png'
import { VscOutput } from "react-icons/vsc"
import { VscRepo } from "react-icons/vsc"
import VentasMenu from './VentasMenu'

const DefaultLayout = () => {
    return (
        <div id="defaultLayout">
            <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className="navbar-brand" href='/'>
                    <img src={torogoz} alt="torogoz-brand-logo" className='logo-image' />
                </a>
                <form className="d-flex my-2 my-lg-0 mx-auto" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar algo..." aria-label="Buscar" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <div className="ml-auto">
                    Usuario | <a href="#">Cerrar sesión</a>
                </div>
            </nav>
            <div className="content">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-auto col-md-2 min-vh-100 sidebar'>
                            <h4>Gestión</h4>
                            <hr />
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item text-white fs-4">
                                    <a><VscOutput /> Ventas</a>
                                </li>
                                <li className="nav-item text-white fs-4">
                                    <a><VscRepo /> Inventario</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </header>
            <main>

            </main>
        </div>
    )
}

export default DefaultLayout