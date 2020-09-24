const primeFactors = number => {
    const primeArray = [];
    let num = parseInt(number);
    if (num.toString() === 'NaN') {
      return 'Please enter a number';
    }
    if (num < 1) {
      return 'Please enter a number above 0';
    }
    for (let i = 2; i <= num / i; i++) {
      while (num % i === 0) {
        num /= i;
        primeArray.push(i);
      }
    }
    if (num > 1) {
      primeArray.push(num);
    }
    return primeArray;
  };
  module.exports.primeFactors = primeFactors;
