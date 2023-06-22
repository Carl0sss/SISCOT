import React from 'react'
import portada from '../images/portada.png'

const Dashboard = () => {
    const style = {
        width: '20rem',
    };

    return (
        <div className="d-flex justify-content-center">
            <div className=''>
                <img src={portada} alt="" style={style}/>
                <h3 className='text-'>Bienvenido a SISCOT</h3>
            </div>
        </div>
    )
}

export default Dashboard