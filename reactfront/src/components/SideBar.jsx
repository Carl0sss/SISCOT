import React from 'react';
import './Sidebar.css';
<<<<<<< HEAD
=======
import { VscOutput } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc"
>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Menu</h4>
      <div className="sidebar-buttons">
<<<<<<< HEAD
        <button>Ventas</button>
        <button>Inventario</button>
=======
        <div className="button-container">         
          <button><VscOutput /> Ventas</button>
        </div>
        <div className="button-container">
          <button><VscRepo /> Inventario</button>
        </div>
>>>>>>> 96ad4d2307dcbc336711fe35845974062e7df82a
      </div>
    </div>
  );
};

export default Sidebar;