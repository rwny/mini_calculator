import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function WallWindowAreaCalculator() {
  const [wallWidth, setWallWidth] = useState('1');
  const [wallHeight, setWallHeight] = useState('1');
  const [windowWidth, setWindowWidth] = useState('0');
  const [windowHeight, setWindowHeight] = useState('0');
  const [area, setArea] = useState(null);
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
    const a = safeEval(wallWidth);
    const b = safeEval(wallHeight);
    const c = safeEval(windowWidth);
    const d = safeEval(windowHeight);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      setError('Please enter valid numbers or simple math expressions');
      setArea(null);
    } else {
      setArea((a * b) - (c * d));
    }
  }, [wallWidth, wallHeight, windowWidth, windowHeight]);

  return (
    <div>
      <h2>wall-window</h2>
      <p>พื้นที่ ผนัง ลบ ประตู,หน้าต่าง</p>

      <div className="input-row">
        <div>
          <label>
            ผนัง กว้าง (m):
            <input type="text" value={wallWidth} onChange={(e) => setWallWidth(e.target.value)} style={{ width: '200px' }} />
          </label>
        </div>
        <div>
          <label>
            ผนัง สูง (m):
            <input type="text" value={wallHeight} onChange={(e) => setWallHeight(e.target.value)} style={{ width: '200px' }} />
          </label>
        </div>
      </div>
      <div className="input-row">
        <div>
          <label>
            Window Width (m):
            <input type="text" value={windowWidth} onChange={(e) => setWindowWidth(e.target.value)} style={{ width: '200px' }} />
          </label>
        </div>
        <div>
          <label>
            Window Height (m):
            <input type="text" value={windowHeight} onChange={(e) => setWindowHeight(e.target.value)} style={{ width: '200px' }} />
          </label>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      {area !== null && !error && (
        <div className="results">
          <p>Wall Area: <span className="answer">{formatNumber(safeEval(wallWidth) * safeEval(wallHeight))}</span> m²</p>
          <p>Window Area: <span className="answer">{formatNumber(safeEval(windowWidth) * safeEval(windowHeight))}</span> m²</p>
          <p>Wall - Window: <span className="answer">{formatNumber(area)}</span> m²</p>
        </div>
      )}
      <br />
      <BackNav />
    </div>
  );
}

export default WallWindowAreaCalculator;
