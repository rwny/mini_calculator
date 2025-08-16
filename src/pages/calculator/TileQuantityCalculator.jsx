import React, { useState, useEffect } from 'react';
import { formatNumber } from '../../utils/formatNumber';
import BackNav from '../../components/BackNav';

function TileQuantityCalculator() {
  const [roomLength, setRoomLength] = useState('1');
  const [roomWidth, setRoomWidth] = useState('1');
  const [tileLength, setTileLength] = useState('1');
  const [tileWidth, setTileWidth] = useState('1');
  const [quantity, setQuantity] = useState(null);
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
    const rL = safeEval(roomLength);
    const rW = safeEval(roomWidth);
    const tL = safeEval(tileLength);
    const tW = safeEval(tileWidth);

    if (isNaN(rL) || isNaN(rW) || isNaN(tL) || isNaN(tW)) {
      setError('Please enter valid numbers or simple math expressions');
      setQuantity(null);
    } else if (tL <= 0 || tW <= 0) {
      setError('Tile dimensions must be greater than 0');
      setQuantity(null);
    } else {
      const roomArea = rL * rW;
      const tileArea = tL * tW;
      setQuantity(Math.ceil(roomArea / tileArea));
    }
  }, [roomLength, roomWidth, tileLength, tileWidth]);

  return (
    <div>
      <h2>Tile Quantity Calculator</h2>
      <div>
        <label>
          Room Length:
          <input type="text" value={roomLength} onChange={(e) => setRoomLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Room Width:
          <input type="text" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tile Length:
          <input type="text" value={tileLength} onChange={(e) => setTileLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tile Width:
          <input type="text" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)} />
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      {quantity !== null && !error && <p>Tiles Needed: <span className="answer">{formatNumber(quantity)}</span></p>}
      <br />
      <BackNav />
    </div>
  );
}

export default TileQuantityCalculator;
