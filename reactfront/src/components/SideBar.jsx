import React from 'react'

const SideBar = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-md-2 min-vh-100 sidebar'>
                    <a className='text-decoration-none d-flex align-itemcenter ms-3 mt-2' href="">

                        <span className='ms-1 fs-4'>Gestión</span>
                    </a>
                    <hr/>
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link" aria-current="page">
                                <i className=''></i>
                                <span className='ms-2'>Ventas</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link" aria-current="page">
                                <i className=''></i>
                                <span className='ms-2'>Inventario</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SideBar