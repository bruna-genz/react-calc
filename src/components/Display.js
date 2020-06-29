import React from 'react';
import PropTypes from 'prop-types';

function Display({ calcResult, operation }) {
  return (
    <div className="Display">
      <p>{operation}</p>
      <h2>{calcResult}</h2>
    </div>
  );
}

Display.defaultProps = {
  calcResult: '0',
  operation: '',
};

Display.propTypes = {
  calcResult: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
