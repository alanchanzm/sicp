const { abs, average, square } = require('../util/index');

const THRESHOLD = 0.01;

function sqrt(x, ERROR_THRESHOLD = THRESHOLD) {
  return sqrt_iter();

  function sqrt_iter(guess = 1) {
    const new_guess = improve(guess);
    return good_enough(guess, new_guess) ? new_guess : sqrt_iter(new_guess);
  }

  function good_enough(guess, new_guess) {
    return abs(new_guess - guess) / guess < ERROR_THRESHOLD;
  }

  function improve(guess) {
    return average(guess, x / guess);
  }
}

function test() {
  [1000000, 1000, 1, 0.001, 0.000001].forEach(num => {
    if (square(sqrt(num)) / num - 1 > THRESHOLD ** 2) {
      throw new Error(`sqrt(${num}) is not precise enough`);
    }
  });
  console.log('tests pass');
}

test();
