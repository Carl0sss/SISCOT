import React from 'react'
import ModuleCard from './ModuleCard'

const MateriaPrimaMenu = () => {

    const renderCard = (moduleName, route) => {
        return (
            <ModuleCard moduleName={moduleName} route={route}/>
        );
    }

    return (
        <div className="container bg-white mt-5">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col">{renderCard('Materias primas', '/show')}</div>
            </div>
        </div>
    )
}

export default MateriaPrimaMenu