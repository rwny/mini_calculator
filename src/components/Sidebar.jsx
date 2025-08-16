import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Calculators</h2>
      <ul>
        <li><Link to="/expression-calculator">Expression</Link></li>
        <li><Link to="/add-calculator">Add a+b</Link></li>
        <li><Link to="/area-calculator">Area a*b</Link></li>
        <li><Link to="/rule-of-three-calculator">Rule of Three</Link></li>
        <li><Link to="/wall-window-area-calculator">Wall-Window area</Link></li>
        <li><>---</></li>
        <li><Link to="/tile-quantity-calculator">Tile Quantity Calculator</Link></li>
        <li><Link to="/wire-length-calculator">Wire Length Calculator</Link></li>
        <li><Link to="/js-console-calculator">JavaScript Console Calculator</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
