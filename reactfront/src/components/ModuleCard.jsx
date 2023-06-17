import React from 'react'

const ModuleCard = (props) => {
    
    const handleClick = () => {
        // Redirigir a otra página
        props.history.push();
    };

    const cardStyle = {
        width: '18rem'
    };

    return (
        <div className='card' style={cardStyle} onClick={handleClick}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p className="card-title">{props.moduleName}</p>
            </div>
        </div>
    )
}

export default ModuleCard