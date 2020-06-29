import React from 'react';
import PropTypes from 'prop-types';

function Display({ calcResult }) {
  return (
    <div className="Display">
      <h2>{calcResult}</h2>
    </div>
  );
}

Display.defaultProps = {
  calcResult: '0',
};

Display.propTypes = { calcResult: PropTypes.string };

export default Display;
