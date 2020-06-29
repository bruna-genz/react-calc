import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  const styles = {
    backgroundColor: '#f5913e',
    width: '25%',
  };

  if (prop.color) styles.backgroundColor = '#e0e0e0';
  if (prop.wide) styles.width = '50%';

  return (
    <button type="button" style={styles}>{buttonName}</button>
  );
}

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;
