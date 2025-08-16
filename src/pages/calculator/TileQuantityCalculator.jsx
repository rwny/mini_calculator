import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';

function TileQuantityCalculator() {
  const [roomLength, setRoomLength] = useState('1');
  const [roomWidth, setRoomWidth] = useState('1');
  const [tileLength, setTileLength] = useState('1');
  const [tileWidth, setTileWidth] = useState('1');
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    const rL = parseFloat(roomLength);
    const rW = parseFloat(roomWidth);
    const tL = parseFloat(tileLength);
    const tW = parseFloat(tileWidth);

    if (!isNaN(rL) && !isNaN(rW) && !isNaN(tL) && !isNaN(tW) && tL > 0 && tW > 0) {
      const roomArea = rL * rW;
      const tileArea = tL * tW;
      setQuantity(Math.ceil(roomArea / tileArea));
    } else {
      setQuantity(null);
    }
  }, [roomLength, roomWidth, tileLength, tileWidth]);

  return (
    <div>
      <h1>Tile Quantity Calculator</h1>
      <div>
        <label>
          Room Length:
          <input type="number" value={roomLength} onChange={(e) => setRoomLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Room Width:
          <input type="number" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tile Length:
          <input type="number" value={tileLength} onChange={(e) => setTileLength(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tile Width:
          <input type="number" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)} />
        </label>
      </div>
      {quantity !== null && <p>Tiles Needed: <span className="answer">{formatNumber(quantity)}</span></p>}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default TileQuantityCalculator;
