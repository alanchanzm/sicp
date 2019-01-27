import { square } from '../../util/index';

function smallest_divisor(n) {
  return find_divisor();

  function find_divisor(test_divisor = 2) {
    if (square(test_divisor) > n) return n;
    if (divides(n, test_divisor)) return test_divisor;
    return find_divisor(next(test_divisor));
  }

  function divides(a, b) {
    return a % b === 0;
  }

  function next(a) {
    return a === 2 ? 3 : a + 2;
  }
}

export default smallest_divisor;
