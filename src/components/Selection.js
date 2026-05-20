import React, { useState } from 'react';
import '../styles/Child.css';
const Selection = ({ applyColor }) => {
  const [style, updateSelectionStyle] = useState({ background: "" });
   
  return (
    <div 
      className="fix-box" 
      style={style} 
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  );
};

export default Selection;