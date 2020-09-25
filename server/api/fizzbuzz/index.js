const evalFizzbuzz = val => {
  if (val.toString() === 'NaN') {
    return 'Please provide a number, try again.';
  }
  if (val > 99) {
    return 'Please provide a number below 100, try again.';
  }
  if (val < 1) {
    return 'Please provide a number above 0, try again.';
  }
  if (val % 1 !== 0) {
    return 'Please provide a number without decimals, try again.';
  }
  if (val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz';
  }
  if (val % 3 === 0) {
    return 'Fizz';
  }
  if (val % 5 === 0) {
    return 'Buzz';
  }

  return val;
};

const fizzBuzz = arr => {
  const newArr = new Array(arr);
  return newArr.map(val => evalFizzbuzz(Number(val)));
};

module.exports.evalFizzbuzz = fizzBuzz;
