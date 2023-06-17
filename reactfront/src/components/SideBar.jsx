import React from 'react'

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul className="nav flex-column">
                <h2>Menu gestión</h2>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ventas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Inventarios</a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar