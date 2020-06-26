import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const buttonGroups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  return (

    <div className="ButtonPanel">
      {buttonGroups.map((group, index) => (
        <div key={`group${index + 1}`} className={`group${index + 1}`}>
          {group.map((button, index) => (
            index === 3
              ? <Button key={button} buttonName={button} wide={button === '0'} />
              : <Button key={button} buttonName={button} wide={button === '0'} color="#e0e0e0" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
