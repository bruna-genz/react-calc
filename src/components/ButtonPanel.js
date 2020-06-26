import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const buttonGroups = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="ButtonPanel">
      {buttonGroups.map((group, groupIndex) => (
        <div key={`group${groupIndex + 1}`} className={`group${groupIndex + 1}`}>
          {group.map((button, index) => (
            <Button
              clickHandler={handleClick}
              key={button}
              buttonName={button}
              wide={button === '0'}
              color={index === (group.length - 1) ? undefined : '#e0e0e0'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
