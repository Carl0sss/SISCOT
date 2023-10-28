import React from 'react'
import ModuleCard from './ModuleCard'
import informes from '../images/informes.jpg'

const InformesMenu = () => {

    const renderCard = (moduleName, route, image) => {
        return (
            <ModuleCard moduleName={moduleName} route={route} image={image} />
        );
    }
    return (
        <div className="container bg-white mt-5">
            <div className='row justify-content-center align-items-center'>
                <div className="col justify-content-center align-items-center g-2">
                    <div className="col">{renderCard('Informe de ventas realizadas', '/ShowInformes', informes)}</div>
                </div>

            </div>
        </div>
    )
}

export default InformesMenu