import React from 'react';
import { Link } from 'react-router-dom';
{/*import ventas from '../images/ventas.jpg'*/}


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
      <div className='tarjeta'>
        <Link to='/show'>
            <div className='card' style={cardStyle} onClick={handleClick}>
                <img src = './Imagenes/ventas.jpg' className="card-img-top" alt=""></img>
                <div className="card-body">
                    <p className="card-title">{props.moduleName}</p>
                </div>
            </div>
        </Link>
      </div>
    )
}

export default ModuleCard