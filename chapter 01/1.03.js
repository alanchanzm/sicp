const { square } = require('../util/index');

/**
 * Exercise 1.3
 * Define a function that takes three numbers as arguments
 * and returns the sum of the squares of the two larger numbers.
 */
function sum_of_larger_squares(x, y, z) {
  const num_1 = max(x, y);
  const num_2 = max(min(x, y), z);

  return square(num_1) + square(num_2);

  /**
   * Return the smaller one of two numbers.
   * @param {number} a
   * @param {number} b
   * @return {number} smaller number
   */
  function min(a, b) {
    return a < b ? a : b;
  }

  /**
   * Return the larger one of two numbers.
   * @param {number} a
   * @param {number} b
   * @return {number} larger number
   */
  function max(a, b) {
    return a > b ? a : b;
  }
}

test();

function test() {
  const case_1 = {
    nums: [1, 2, 3],
    ans: 13,
  };
  const case_2 = {
    nums: [1, 1, 2],
    ans: 5,
  };
  const case_3 = {
    nums: [-3, 0, 1],
    ans: 1,
  };
  const case_4 = {
    nums: [0, 0, 0],
    ans: 0,
  };
  [(case_1, case_2, case_3, case_4)].forEach(({ nums, ans }) => {
    const result = sum_of_larger_squares(...nums);
    if (result !== ans) {
      console.error(
        `sum_of_larger_squares(${nums}) should be ${ans}, not ${result}`
      );
    }
  });
  console.log('tests pass');
}
