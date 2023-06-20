import React from 'react'

const ModuleCard = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        // Redirigir a otra página
        window.location.href = props.route;
    };

    const cardStyle = {
        width: '20rem',
    };

    return (

        <div className='card' style={cardStyle} onClick={handleClick}>
            <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p className="card-title">{props.moduleName}</p>
            </div>
        </div>
    )
}

export default ModuleCard