import { is_even, square } from '../../util/index';

function fast_expt(b, n) {
  return fast_expt_iter();

  function fast_expt_iter(res = 1, x = b, k = n) {
    if (k === 0) return res;
    // (x**n)**2 === (x**2)**n
    if (is_even(k)) return fast_expt_iter(res, square(x), k / 2);
    // x**n === x * x**(n-1)
    return fast_expt_iter(res * x, x, k - 1);
  }
}

export default fast_expt;
