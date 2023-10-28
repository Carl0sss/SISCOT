import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowInformes = () => {
  const [ventas, setVentas] = useState([])

  useEffect(() => {
    gellAllVentas();
  }, []);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const handlesumar = () => {
    const sumar = ventas.map((venta) => parseFloat(venta.TOTAL_VENTA))
    .reduce((previous, current)=>{
      return previous + current;
    }, 0);
    setCount(sumar);
  };
  handlesumar();
});

const [suma, setSuma] = useState(0);

useEffect(() =>{
  const handlesuma = () =>{
    const sumar1 = ventas.map((venta) => parseInt(venta.ID_VENTA))
    .reverse((previous, current)=>{
      return previous+current;
    }, 0);
    setSuma(sumar1);
  };
  handlesuma();
});

  const gellAllVentas = async () => {
    const response = await axios.get(`${endpoint}/ventas`);
    setVentas(response.data);
  };

  return (
    <div>
      <h2>Informe de ventas realizadas</h2>
      <hr />
      <div className='d-grid gap-2'>
        <hr />
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Ventas realizadas</th>
              <th>Total en efectivo de las ventas</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.ID_VENTA}>
                <td>{ventas.ID_CLIENTE}</td>
                <td>{count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowInformes;