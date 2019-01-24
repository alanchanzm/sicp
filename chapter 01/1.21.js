const { square } = require('../util/index');

function smallest_divisor(n) {
  return find_divisor();

  function find_divisor(test_divisor = 2) {
    if (square(test_divisor) > n) return n;
    if (divides(n, test_divisor)) return test_divisor;
    return find_divisor(test_divisor + 1);
  }

  function divides(a, b) {
    return a % b === 0;
  }
}

const ans = {
  smallest_divisor_199: smallest_divisor(199),
  smallest_divisor_1999: smallest_divisor(1999),
  smallest_divisor_19999: smallest_divisor(19999),
};

console.table(ans);

module.exports = { smallest_divisor };
