import React from 'react'
import { Link } from 'react-router-dom';
//import ventas from '../images/ventas.jpg'

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
                <img src='https://st3.depositphotos.com/1000207/13607/i/450/depositphotos_136079020-stock-photo-copper-pipe-on-white-background.jpg' className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-title">{props.moduleName}</p>
                </div>
            </div>
        </Link>
    )
}

export default ModuleCard