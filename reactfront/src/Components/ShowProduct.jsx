import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VscAdd, VscEdit, VscTrash } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api';

const ShowProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getAllProductosT();
  }, []);

  const getAllProductosT = async () => {
    try {
      const response = await axios.get(`${endpoint}/productos`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const deleteProducto = async (id) => {
    try {
      await axios.delete(`${endpoint}/producto/${id}`);
      getAllProductosT();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de productos</h2>
      <hr />
      <div className='d-grid gap-2'>
        <Link to='/createProducto' className='btn btn-success btn-lg mt-8 mb-3 text-white'><VscAdd size={24} /> Ingresar un producto al inventario</Link>
        <hr />

        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.ID_PRODUCTO}>
                <td>{producto.ID_PRODUCTO}</td>
                <td>{producto.NOMBRE_PRODUCTO}</td>
                <td>{producto.inventario_productos.length > 0 ? producto.inventario_productos[0].CANTIDAD_INVENTARIO_PRODUCTOS : 'Sin inventario'}</td>
                <td>
                  <div>
                    <Link to={`/editProducto/${producto.ID_PRODUCTO}`} className='btn btn-warning mx-2'>
                      <VscEdit />
                    </Link>
                    <button onClick={() => deleteProducto(producto.ID_PRODUCTO)} className='btn btn-danger mx-2'>
                      <VscTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowProducts;
