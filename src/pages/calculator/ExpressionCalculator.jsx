import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function ExpressionCalculator() {
  const [expression, setExpression] = useState('((3.14*1.23)**2)+1');
  const [result, setResult] = useState(null);

  useEffect(() => {
    try {
      // More robust evaluation with proper floating point handling
      const sanitizedExpr = expression
        .replace(/\^/g, '**') // Convert ^ to ** for exponentiation
        .replace(/[^-()\d/*+.]/g, ''); // Remove potentially dangerous chars
      
      const calculatedResult = eval(sanitizedExpr);
      if (typeof calculatedResult === 'number') {
        setResult(parseFloat(calculatedResult.toFixed(6))); // Limit to 6 decimal places
      } else {
        setResult('Invalid Expression');
      }
    } catch (e) {
      setResult('Error');
    }
  }, [expression]);

  return (
    <div>
      <h2>Expression Calculator</h2>
      <div>
        <label>
          Expression:
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="e.g., 12.5+(2*3.14)"
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
      <BackNav />
    </div>
  );
}

export default ExpressionCalculator;
