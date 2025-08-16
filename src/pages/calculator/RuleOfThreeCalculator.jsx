import { useState } from 'react';
import BackNav from '../../components/BackNav';

export default function RuleOfThreeCalculator() {
  const [values, setValues] = useState({
    a: '2.88',
    b: '1500',
    c: '1'
  });
  const [result, setResult] = useState((1 * 1500) / 2.88);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {
      ...values,
      [name]: value
    };
    setValues(newValues);
    
    // Realtime calculation
    if (newValues.a && newValues.b && newValues.c && newValues.a !== '0') {
      const answer = (parseFloat(newValues.c) * parseFloat(newValues.b)) / parseFloat(newValues.a);
      setResult(answer);
    }
  };

  return (
    <div className="calculator-page">
      <BackNav />
      <h2>Rule of Three Calculator</h2>
      
      <div className="calculator-form">
        <div className="input-row">
          <div className="input-group">
            <label>Value A:</label>
            <input
              type="number"
              name="a"
              value={values.a}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Value B:</label>
            <input
              type="number"
              name="b"
              value={values.b}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-group">
            <label>Value C:</label>
            <input
              type="number"
              name="c"
              value={values.c}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Result:</label>
            <input
              type="number"
              value={result}
              readOnly
            />
          </div>
        </div>

        <div className="result">
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
