const fizzBuzz = arr => {
    const newArr = new Array(arr);

    return newArr.map(val => evalFizzbuzz(parseInt(val)));
}

const evalFizzbuzz = val => {
    if (val.toString() === 'NaN') {
        return 'Please provide a number, try again.';
    } else if (val > 99) {
        return 'Please provide a number below 100, try again.';
    } else if (val < 1) {
        return 'Please provide a number above 0, try again.';
    } else if (val % 1 !== 0) {
        return 'Please provide a number without decimals, try again.';
    } else if (val % 3 === 0 && val % 5 === 0) {
        return 'FizzBuzz';
    } else if (val % 3 === 0) {
        return 'Fizz';
    } else if (val % 5 === 0) {
        return 'Buzz';
    } else {
        return val;
    }
}

module.exports.evalFizzbuzz = evalFizzbuzz;
