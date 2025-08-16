import React from 'react';

const ExpressionInput = ({ value, onChange, label, className = '' }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <label>
        {label}
        <input 
          type="text" 
          value={value} 
          onChange={handleChange}
          className="expression-input"
        />
      </label>
    </div>
  );
};

export default ExpressionInput;
