import React from 'react'
import ModuleCard from './ModuleCard'
import producto from '../images/producto.jpg'
import materia from '../images/inventario.jpg'

const InventariosMenu = () => {

    const renderCard = (moduleName, route, image) => {
        return (
            <ModuleCard moduleName={moduleName} route={route} image={image} />
        );
    }
    return (
        <div className="container bg-white mt-5">
            <div className='row justify-content-center align-items-center'>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Gestionar Productos', '/showProductos', producto)}</div>
                </div>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Gestionar Materias Primas', '/showMateriasPrimas', materia)}</div>
                </div>
            </div>
        </div>
    )
}

export default InventariosMenu