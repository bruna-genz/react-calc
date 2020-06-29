import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (!total) {
        return { total: buttonName, next, operation };
      }
      return { total: total + buttonName, next, operation };

    case '+/-':
      return { total: -total, next: -next, operation };

    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%': // the value on total will go to next and total will be true
      return { total: null, next: total, operation: buttonName };
    case '.':
      return { total: buttonName, next, operation };
    case 'AC':
      return { total: null, next: null, operation: null };
    case '=':
      return { total: operate(total, next, operation).toString(), next, buttonName };
    default:
      return 'err';
  }
};

export default calculate;
