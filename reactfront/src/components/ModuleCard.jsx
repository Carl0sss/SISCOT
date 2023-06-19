import React from 'react'
<<<<<<< HEAD
import ventas from '../images/ventas.jpg'
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import ventas from '../images/pedidos.jpg'

>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a

const ModuleCard = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        // Redirigir a otra página
        window.location.href = props.route;
    };

    const cardStyle = {
        width: '20rem'
    };

    return (
        <Link to='/show'>
            <div className='card' style={cardStyle} onClick={handleClick}>
                <img src={ventas} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-title">{props.moduleName}</p>
                </div>
            </div>
        </Link>
    )
}

export default ModuleCard