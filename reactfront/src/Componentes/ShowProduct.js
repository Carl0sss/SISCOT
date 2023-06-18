import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VscAdd, VscEdit, VscTrash } from 'react-icons/vsc';
import './ShowProduct.css'; 
import { Link } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api';

const ShowProducts = () => {
  const [inventario, setInventario] = useState([]);

  useEffect(() => {
    getAllProductosT();
  }, []);
 
 
  const getAllProductosT = async () => {
    const response = await axios.get(`${endpoint}/inventarios?_expand=productos`);
    setInventario(response.data);
  };
  


  const deleteProducto = async (id) => {
    await axios.delete(`${endpoint}/inventario/${id}`);
    window.location.reload();
  };
  
  return (
    <div>
      <div className='d-grid gap-2'>
        <button className='button-create'>
          <VscAdd size={24} />
          <Link to='/create' className='btn-create'> Ingresar un producto al inventario</Link>
        </button>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Inventario</th>
            <th>ID Producto</th>
            <th>Nombre</th>
            <th>Cantidad</th>           
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((inventario) => (
            <tr key={inventario.ID_INVENTARIO_PRODUCTOS}>
              <td>{inventario.ID_INVENTARIO_PRODUCTOS}</td>
              <td>{inventario.ID_PRODUCTO}</td>
              <td>{inventario.NOMBRE_PRODUCTO}</td>
              <td>{inventario.CANTIDAD_INVENTARIO_PRODUCTOS}</td>              
              <td>
                <div>
                  <Link to={`/edit/${inventario.ID_INVENTARIO_PRODUCTOS}`} className='btn btn-warning'>
                    <VscEdit /> 
                  </Link>
                  <button onClick={() => deleteProducto(inventario.ID_INVENTARIO_PRODUCTOS)} className='btn btn-danger'>
                    <VscTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProducts;

