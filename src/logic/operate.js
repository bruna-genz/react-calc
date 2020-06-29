import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne || 0);
  const y = Big(numberTwo || 0);

  switch (operation) {
    case '+':
      return x.plus(y);
    case '-':
      return x.minus(y);
    case 'x':
      return x.mul(y);
    case '÷':
      return x.div(y);
    case '%':
      return x.mul(y.div(100));
    default:
      return 'err';
  }
};

export default operate;
