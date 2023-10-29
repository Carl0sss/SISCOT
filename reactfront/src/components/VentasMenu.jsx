import React from 'react'
import ModuleCard from './ModuleCard'
import ventas from '../images/ventas.jpg'
import cotizacion from '../images/cotizacion.jpg'
import pedido from '../images/pedidos.jpg'

const VentasMenu = () => {

    const renderCard = (moduleName, route, image) => {
        return (
            <ModuleCard moduleName={moduleName} route={route} image={image} />
        );
    }

    return (
        <div className="container bg-white mt-5">
            <div className='row justify-content-center align-items-center'>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Gestionar Cotizaciones', '/show', cotizacion)}</div>
                </div>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Gestionar Ventas', '/showVentas', ventas)}</div>
                </div>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Gestionar Pedidos', '/showPedidos', pedido)}</div>
                </div>
            </div>
        </div>
    )
}

export default VentasMenu