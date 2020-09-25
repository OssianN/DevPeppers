/* eslint-disable */

const romanConverter = num => {
  const number = Number(num);
  if (number.toString() === 'NaN') {
    return 'Please provide a number';
  }
  if (number < 0 || number > 3000) {
    return 'Please provide a number between 0 and 3000';
  }

  const romanNumbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  let counter = number.toString().length;
  let result = '';

  for (let i = 0; i < number.toString().length; i++) {
    const n = Number(number.toString()[i]);
    if (n !== 0) {
      switch (counter) {
        case 4:
          result += romanNumbers[1000].repeat(n);
          break;
        case 3:
          n % 5 !== 0 ?
            result += resolveNumber(n, romanNumbers[100], romanNumbers[500], romanNumbers[1000])
            : result += romanNumbers[500]
          break;
        case 2:
          n % 5 !== 0 ?
            result += resolveNumber(n, romanNumbers[10], romanNumbers[50], romanNumbers[100])
            : result += romanNumbers[50]
          break;
        case 1:
          n % 5 !== 0 ?
            result += resolveNumber(n, romanNumbers[1], romanNumbers[5], romanNumbers[10])
            : result += romanNumbers[5]
          break;
        default:
          result;
      }
    }
    counter--;
  }

  return result;
};

const resolveNumber = (number, one, five, ten) => {
  const remainder = number % 5;

  if (number < 4) {
    return one.repeat(remainder);
  }
  if (number === 4) {
    return one + five;
  }
  if (number < 9) {
    return five + one.repeat(remainder);
  }

  return one + ten;
};

module.exports.romanConverter = romanConverter;
