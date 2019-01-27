import { abs, square } from '../../util/index';

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

export default cube_root;
