import React from 'react';
import { Link } from 'react-router-dom';

function BackNav() {
  return (
    <div className="back-nav">
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BackNav;
