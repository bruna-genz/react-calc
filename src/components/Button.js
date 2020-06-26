import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, color, wide }) {
  const styles = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return <button type="button" style={styles}>{buttonName}</button>;
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

export default Button;
