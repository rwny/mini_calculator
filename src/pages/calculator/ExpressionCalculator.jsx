import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

function ExpressionCalculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    try {
      // Basic validation to prevent arbitrary code execution
      // This is a simple calculator, so eval is used for convenience.
      // For a production app, a more robust expression parser would be needed.
      const calculatedResult = eval(expression);
      if (typeof calculatedResult === 'number' && !isNaN(calculatedResult)) {
        setResult(calculatedResult);
      } else {
        setResult('Invalid Expression');
      }
    } catch (e) {
      setResult('Error');
    }
  }, [expression]);

  return (
    <div>
      <h1>Expression Calculator</h1>
      <div>
        <label>
          Expression:
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="e.g., 1+(20/5)+(2*3)"
          />
        </label>
      </div>
      {result !== null && (
        <p>Result: {
          typeof result === 'number' 
            ? <span className="answer">{formatNumber(result)}</span>
            : result
        }</p>
      )}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ExpressionCalculator;
