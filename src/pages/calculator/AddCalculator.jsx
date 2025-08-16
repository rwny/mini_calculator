import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';
import { safeEval } from '../../utils/safeEval';
import ExpressionInput from '../../components/ExpressionInput';

function AddCalculator() {
  const [numA, setNumA] = useState('1');
  const [numB, setNumB] = useState('1');
  const [sum, setSum] = useState(null);
  const [errorA, setErrorA] = useState(null);
  const [errorB, setErrorB] = useState(null);

  useEffect(() => {
    const a = safeEval(numA);
    const b = safeEval(numB);
    setErrorA(isNaN(a) && numA ? 'Invalid expression' : null);
    setErrorB(isNaN(b) && numB ? 'Invalid expression' : null);
    
    if (!isNaN(a) && !isNaN(b)) {
      setSum(a + b);
    } else {
      setSum(null);
    }
  }, [numA, numB]);

  return (
    <div>
      <h2>Add Calculator</h2>
      <div>
        <ExpressionInput
          value={numA}
          onChange={setNumA}
          label="Number A:"
          placeholder="e.g., 5 or 2+3"
        />
        {errorA && <div className="error">{errorA}</div>}
      </div>
      <div>
        <ExpressionInput
          value={numB}
          onChange={setNumB}
          label="Number B:"
          placeholder="e.g., 5 or 2+3"
        />
        {errorB && <div className="error">{errorB}</div>}
      </div>
      {sum !== null && <p>Sum: <span className="answer">{formatNumber(sum)}</span></p>}
      <br />
      <BackNav />
    </div>
  );
}

export default AddCalculator;
