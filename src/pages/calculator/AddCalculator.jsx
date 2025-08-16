import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

function AddCalculator() {
  const [numA, setNumA] = useState('1');
  const [numB, setNumB] = useState('1');
  const [sum, setSum] = useState(null);

  useEffect(() => {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    if (!isNaN(a) && !isNaN(b)) {
      setSum(a + b);
    } else {
      setSum(null);
    }
  }, [numA, numB]);

  return (
    <div>
      <h1>Add Calculator</h1>
      <div>
        <label>
          Number A:
          <input type="number" value={numA} onChange={(e) => setNumA(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Number B:
          <input type="number" value={numB} onChange={(e) => setNumB(e.target.value)} />
        </label>
      </div>
      {sum !== null && <p>Sum: <span className="answer">{formatNumber(sum)}</span></p>}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AddCalculator;
