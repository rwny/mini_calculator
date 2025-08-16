import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function WireLengthCalculator() {
  const [voltage, setVoltage] = useState('1');
  const [current, setCurrent] = useState('1');
  const [resistancePerMeter, setResistancePerMeter] = useState('1');
  const [length, setLength] = useState(null);
  const [error, setError] = useState(null);

  const safeEval = (expr) => {
    try {
      // Replace simple math expressions with their evaluated result
      if (/^[\d+\-*/(). ]+$/.test(expr)) {
        return eval(expr);
      }
      return parseFloat(expr);
    } catch (e) {
      return NaN;
    }
  };

  useEffect(() => {
    setError(null);
    const V = safeEval(voltage);
    const I = safeEval(current);
    const R_per_m = safeEval(resistancePerMeter);

    if (isNaN(V) || isNaN(I) || isNaN(R_per_m)) {
      setError('Please enter valid numbers or simple math expressions');
      setLength(null);
    } else if (I === 0) {
      setError('Current cannot be zero');
      setLength(null);
    } else if (R_per_m <= 0) {
      setError('Resistance per meter must be greater than 0');
      setLength(null);
    } else {
      const totalResistance = V / I;
      setLength(totalResistance / R_per_m);
    }
  }, [voltage, current, resistancePerMeter]);

  return (
    <div>
      <h2>Wire Length Calculator</h2>
      <div>
        <label>
          Voltage (V):
          <input type="text" value={voltage} onChange={(e) => setVoltage(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Current (A):
          <input type="text" value={current} onChange={(e) => setCurrent(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Resistance per Meter (Ohms/m):
          <input type="text" value={resistancePerMeter} onChange={(e) => setResistancePerMeter(e.target.value)} />
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      {length !== null && !error && <p>Wire Length: <span className="answer">{formatNumber(length)}</span> meters</p>}
      <br />
      <BackNav />
    </div>
  );
}

export default WireLengthCalculator;
