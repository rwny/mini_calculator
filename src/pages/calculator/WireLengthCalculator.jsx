import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

function WireLengthCalculator() {
  const [voltage, setVoltage] = useState('1');
  const [current, setCurrent] = useState('1');
  const [resistancePerMeter, setResistancePerMeter] = useState('1');
  const [length, setLength] = useState(null);

  useEffect(() => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R_per_m = parseFloat(resistancePerMeter);

    if (!isNaN(V) && !isNaN(I) && !isNaN(R_per_m) && I !== 0 && R_per_m > 0) {
      const totalResistance = V / I;
      setLength(totalResistance / R_per_m);
    } else {
      setLength(null);
    }
  }, [voltage, current, resistancePerMeter]);

  return (
    <div>
      <h1>Wire Length Calculator</h1>
      <div>
        <label>
          Voltage (V):
          <input type="number" value={voltage} onChange={(e) => setVoltage(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Current (A):
          <input type="number" value={current} onChange={(e) => setCurrent(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Resistance per Meter (Ohms/m):
          <input type="number" value={resistancePerMeter} onChange={(e) => setResistancePerMeter(e.target.value)} />
        </label>
      </div>
      {length !== null && <p>Wire Length: <span className="answer">{formatNumber(length)}</span> meters</p>}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default WireLengthCalculator;
