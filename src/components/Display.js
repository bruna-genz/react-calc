import React from 'react';

function Display(prop) {
  return (
    <div className="Display">
      <h2>{prop.calcResult}</h2>
    </div>
  );
}

export default Display;
