import { is_even } from '../../util/index';
import { double, halve } from './1.17';

function multiplication(a, b) {
  return multiplication_iter();

  function multiplication_iter(product = 0, x = a, y = b) {
    if (x === 0 || y === 0) return product;
    if (x === 1) return y + product;
    if (y === 1) return x + product;
    if (is_even(y)) return multiplication_iter(product, double(x), halve(y));
    return multiplication_iter(product + x, x, y - 1);
  }
}

export default multiplication;
