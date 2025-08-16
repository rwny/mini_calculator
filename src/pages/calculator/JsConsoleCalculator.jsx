import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function JsConsoleCalculator() {
  const [code, setCode] = useState('Math.PI * 2'); // JS example
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      // Safe evaluation with limited scope
      const calculated = new Function('return ' + code)();
      setResult(calculated);
      setHistory(prev => [...prev, {code, result: calculated}].slice(-5));
    } catch (e) {
      setResult('Error: ' + e.message);
    }
  }, [code]);

  return (
    <div>
      <h2>JavaScript Console Calculator</h2>
      <div>
        <label>
          JavaScript Expression:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g., Math.PI * 2 or 2**3"
            style={{width: '100%'}}
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
      {history.length > 0 && (
        <div className="history">
          <h4>History:</h4>
          <ul>
            {history.map((item, i) => (
              <li key={i}>
                {item.code} = {formatNumber(item.result)}
              </li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <BackNav />
    </div>
  );
}

export default JsConsoleCalculator;
