import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AreaCalculator from './pages/calculator/AreaCalculator';
import TileQuantityCalculator from './pages/calculator/TileQuantityCalculator';
import WireLengthCalculator from './pages/calculator/WireLengthCalculator';
import AddCalculator from './pages/calculator/AddCalculator';
import ExpressionCalculator from './pages/calculator/ExpressionCalculator';
import WallWindowAreaCalculator from './pages/calculator/WallWindowAreaCalculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/expression-calculator" />} />
            <Route path="/add-calculator" element={<AddCalculator />} />
            <Route path="/area-calculator" element={<AreaCalculator />} />
            <Route path="/expression-calculator" element={<ExpressionCalculator />} />
            <Route path="/tile-quantity-calculator" element={<TileQuantityCalculator />} />
            <Route path="/wire-length-calculator" element={<WireLengthCalculator />} />
            <Route path="/wall-window-area-calculator" element={<WallWindowAreaCalculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
