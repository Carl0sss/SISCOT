import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Menu</h4>
      <div className="sidebar-buttons">
        <button>Ventas</button>
        <button>Inventario</button>
      </div>
    </div>
  );
};

export default Sidebar;