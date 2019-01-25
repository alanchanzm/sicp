const { abs, square, cube } = require('../util/index');

const THRESHOLD = 0.01;

function cube_root(x, ERROR_THRESHOLD = THRESHOLD) {
  return cube_root_iter();

  function cube_root_iter(guess = 1) {
    const new_guess = improve(guess);
    return good_enough(guess, new_guess)
      ? new_guess
      : cube_root_iter(new_guess);
  }

  function good_enough(guess, new_guess) {
    return abs((guess - new_guess) / guess) < ERROR_THRESHOLD;
  }

  function improve(guess) {
    return (x / square(guess) + 2 * guess) / 3;
  }
}

function test() {
  [
    1000000,
    1000,
    1,
    0.001,
    0.000001,
    -1000000,
    -1000,
    -1,
    -0.001,
    -0.000001,
  ].forEach(num => {
    if (cube(cube_root(num)) / num - 1 > THRESHOLD) {
      throw new Error(`cube_root(${num}) is not precise enough`);
    }
  });
  console.log('tests pass');
}

test();
