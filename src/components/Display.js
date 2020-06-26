import React from 'react';
import PropTypes from 'prop-types';

function Display({ calcResult }) {
  return <h2>{calcResult}</h2>;
}

Display.defaultProps = {
  calcResult: '0',
};

Display.propTypes = { calcResult: PropTypes.string };

export default Display;
