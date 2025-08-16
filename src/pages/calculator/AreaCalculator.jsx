import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

function AreaCalculator() {
  const [length, setLength] = useState('1');
  const [width, setWidth] = useState('1');
  const [area, setArea] = useState(null);

  useEffect(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!isNaN(l) && !isNaN(w)) {
      setArea(l * w);
    } else {
      setArea(null);
    }
  }, [length, width]);

  return (
    <div>
      <h1>Area Calculator</h1>
      <div>
        <label>
          Length:
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Width:
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
      </div>
      {area !== null && <p>Area: <span className="answer">{formatNumber(area)}</span></p>}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AreaCalculator;
