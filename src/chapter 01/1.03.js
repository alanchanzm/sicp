import { square } from '../../util/index';

/**
 * Exercise 1.3
 * Define a function that takes three numbers as arguments
 * and returns the sum of the squares of the two larger numbers.
 */
function sum_of_larger_squares(x, y, z) {
  const num_1 = max(x, y);
  const num_2 = max(min(x, y), z);

  return square(num_1) + square(num_2);

  function min(a, b) {
    return a < b ? a : b;
  }

  function max(a, b) {
    return a > b ? a : b;
  }
}

export default sum_of_larger_squares;
