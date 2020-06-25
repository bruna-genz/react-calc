import React from 'react';

function Button(prop) {
  const styles = {
    backgroundColor: '#f5913e',
    width: '25%',
  };

  if (prop.color) styles.backgroundColor = '#e0e0e0';
  if (prop.wide) styles.width = '50%';

  return (
    <button type="button" style={styles}>{prop.name}</button>
  );
}

export default Button;
