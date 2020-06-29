import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const buttonGroups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  return (
    <div className="ButtonPannel">
      {buttonGroups.map((group, index) => (
        <div key={`group${index + 1}`} className={`group${index + 1}`}>
          {group.map(button => (
            <Button key={button} buttonName={button} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ButtonPanel;
