import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);

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
