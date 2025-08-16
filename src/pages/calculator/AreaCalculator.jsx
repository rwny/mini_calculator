import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function AreaCalculator() {
  const [length, setLength] = useState('1');
  const [width, setWidth] = useState('1');
  const [area, setArea] = useState(null);
  const [errorLength, setErrorLength] = useState(null);
  const [errorWidth, setErrorWidth] = useState(null);

  const evaluateExpression = (expr) => {
    try {
      const result = eval(expr);
      return typeof result === 'number' && !isNaN(result) ? result : null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const l = evaluateExpression(length);
    const w = evaluateExpression(width);
    setErrorLength(l === null && length ? 'Invalid expression' : null);
    setErrorWidth(w === null && width ? 'Invalid expression' : null);
    
    if (l !== null && w !== null) {
      setArea(l * w);
    } else {
      setArea(null);
    }
  }, [length, width]);

  return (
    <div>
      <h2>Area Calculator</h2>
      <div>
        <label>
          Length:
          <input 
            type="text" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            placeholder="e.g., 5 or 2+3"
          />
        </label>
        {errorLength && <div className="error">{errorLength}</div>}
      </div>
      <div>
        <label>
          Width:
          <input 
            type="text" 
            value={width} 
            onChange={(e) => setWidth(e.target.value)} 
            placeholder="e.g., 5 or 2+3"
          />
        </label>
        {errorWidth && <div className="error">{errorWidth}</div>}
      </div>
      {area !== null && <p>Area: <span className="answer">{formatNumber(area)}</span></p>}
      <br />
      <BackNav />
    </div>
  );
}

export default AreaCalculator;
