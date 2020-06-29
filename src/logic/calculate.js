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
      if (total && total !== '0') {
        return { total: total + buttonName, next, operation };
      }
      return { total: buttonName, next, operation };

    case '+/-':
      if (total.indexOf('-') >= 0) {
        return { total: total.substring(1), next, operation };
      }
      return { total: total ? `-${total}` : null, next, operation };

    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (total) {
        return { total: null, next: total, operation: buttonName };
      }
      return { total, next: '0', operation: buttonName };
    case '.':
      if (total) {
        if (total.indexOf('.') < 0) {
          return { total: total + buttonName, next, operation };
        }
        return { total, next, operation };
      }
      return { total: '0.', next, operation };
    case 'AC':
      return { total: null, next: null, operation: null };
    case '=':
      if (operation) {
        return { total: null, next: operate(next, total, operation).toString(), operation: null };
      }
      return { total, next, operation };
    default:
      return 'err';
  }
};

export default calculate;
