import React from 'react'
import torogoz from '../images/logo.png'
import { VscOutput } from "react-icons/vsc"
import { VscRepo } from "react-icons/vsc"
import { Link, Navigate, Outlet } from "react-router-dom";

const DefaultLayout = () => {


    return (
        <div className="defaultLayout">
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
            </header>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-auto col-md-2 min-vh-100 sidebar'>
                        <h4>Gestión</h4>
                        <hr />
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item fs-4">
                                <Link to="/ventas" className="nav-link text-white">
                                    <VscOutput /> Ventas
                                </Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link to="/inventarios" className="nav-link text-white">
                                    <VscRepo /> Inventario
                                </Link>
                            </li>
                            <li className="nav-item fs-4">
                                <Link to="/informes" className="nav-link text-white">
                                    <VscRepo /> Informes
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col col mt-5">
                        <main className='main-content'>
                            <div className='m-3 p-5 bg-white'>
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout