import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';
import { safeEval } from '../../utils/safeEval';

function SteelPlateWeightCalculator() {
  const [width, setWidth] = useState('100');
  const [length, setLength] = useState('100');
  const [thickness, setThickness] = useState('10');
  const [weight, setWeight] = useState(null);
  const [errorWidth, setErrorWidth] = useState(null);
  const [errorLength, setErrorLength] = useState(null);
  const [errorThickness, setErrorThickness] = useState(null);

  useEffect(() => {
    const w = safeEval(width);
    const l = safeEval(length);
    const t = safeEval(thickness);
    
    setErrorWidth(isNaN(w) && width ? 'Invalid expression' : null);
    setErrorLength(isNaN(l) && length ? 'Invalid expression' : null);
    setErrorThickness(isNaN(t) && thickness ? 'Invalid expression' : null);
    
    if (!isNaN(w) && !isNaN(l) && !isNaN(t)) {
      // Steel density calculation: width(cm) * length(cm) * thickness(mm) * 0.000785
      const calculatedWeight = w * l * t * 0.000785;
      setWeight(calculatedWeight);
    } else {
      setWeight(null);
    }
  }, [width, length, thickness]);

  return (
    <div>
      <h2>Steel Plate Weight Calculator</h2>
      <div>
        <label>
          Width (cm):
          <input 
            type="text" 
            value={width} 
            onChange={(e) => setWidth(e.target.value)} 
            placeholder="e.g., 100 or 50+50"
          />
        </label>
        {errorWidth && <div className="error">{errorWidth}</div>}
      </div>
      <div>
        <label>
          Length (cm):
          <input 
            type="text" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            placeholder="e.g., 200 or 100*2"
          />
        </label>
        {errorLength && <div className="error">{errorLength}</div>}
      </div>
      <div>
        <label>
          Thickness (mm):
          <input 
            type="text" 
            value={thickness} 
            onChange={(e) => setThickness(e.target.value)} 
            placeholder="e.g., 10 or 5+5"
          />
        </label>
        {errorThickness && <div className="error">{errorThickness}</div>}
      </div>
      {weight !== null && (
        <p>Weight: <span className="answer">{formatNumber(weight)} kg</span></p>
      )}
      <br />
      <BackNav />
    </div>
  );
}

export default SteelPlateWeightCalculator;