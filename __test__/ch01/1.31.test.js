import { identity, inc, is_odd } from '../../util/index';
import { product_recursive, product_iterative } from '../../src/ch01/1.31';

test(`product_recursive --- identity,1,inc,10 --- 3628800`, () => {
  expect(product_recursive(identity, 1, inc, 10)).toBe(3628800);
});
test(`product_iterative --- identity,1,inc,10 --- 3628800`, () => {
  expect(product_iterative(identity, 1, inc, 10)).toBe(3628800);
});

test(`calc_pi --- product_recursive,1000 --- pi`, () => {
  expect(calc_pi(product_recursive, 30)).toBeCloseTo(Math.PI, 1);
});
test(`calc_pi --- product_iterative,1000 --- pi`, () => {
  expect(calc_pi(product_iterative, 30)).toBeCloseTo(Math.PI, 1);
});

function calc_pi(f, n) {
  return 4 * f(term, 1, inc, n);

  function term(x) {
    const res = (x + 1) / (x + 2);
    return is_odd(x) ? res : 1 / res;
  }
}
