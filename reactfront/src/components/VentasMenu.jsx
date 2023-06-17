import React from 'react'
import ModuleCard from './ModuleCard'

const VentasMenu = () => {

    const renderCard = (moduleName) => {
        return (
            <ModuleCard moduleName={moduleName} />
        );
    }

    return (
        <div className="container bg-white mt-5">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col">{renderCard('Gestionar Ventas')}</div>
                <div className="col">{renderCard('Gestionar Cotizaciones')}</div>
                <div className="col">{renderCard('Gestionar Pedidos')}</div>
            </div>
        </div>
    )
}

export default VentasMenu