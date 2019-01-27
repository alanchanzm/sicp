import { square } from '../../util/index';

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

export default smallest_divisor;
