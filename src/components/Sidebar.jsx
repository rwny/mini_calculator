import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Calculators</h2>
      <ul>
        <li><Link to="/expression-calculator">Expression Calculator</Link></li>
        <li><Link to="/add-calculator">Add Calculator</Link></li>
        <li><Link to="/area-calculator">Area Calculator</Link></li>
        <li><Link to="/wall-window-area-calculator">Wall-Window area</Link></li>
        <li><>---</></li>
        <li><Link to="/tile-quantity-calculator">Tile Quantity Calculator</Link></li>
        <li><Link to="/wire-length-calculator">Wire Length Calculator</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
