import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Mini Calculator</h1>
      <p>Welcome to the Mini Calculator app. Please select a calculator from the list below:</p>
      <ul>
        <li><Link to="/area-calculator">Area Calculator</Link></li>
        <li><Link to="/tile-quantity-calculator">Tile Quantity Calculator</Link></li>
        <li><Link to="/wire-length-calculator">Wire Length Calculator</Link></li>
      </ul>
    </div>
  );
}

export default Home;
