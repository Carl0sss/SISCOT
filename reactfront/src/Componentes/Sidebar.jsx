import React from 'react';
import './Sidebar.css';
import { VscOutput } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Menu</h4>
      <div className="sidebar-buttons">
        <div className="button-container">         
          <button><VscOutput /> Ventas</button>
        </div>
        <div className="button-container">
          <button><VscRepo /> Inventario</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

