const { is_even, square } = require('../util/index');

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

function test() {
  [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].forEach((ans, n) => {
    if (fast_expt(2, n) !== ans) {
      throw new Error(
        `fast_expt(2, ${n}) should be ${ans}, not ${fast_expt(2, n)}`
      );
    }
  });
  console.log('tests pass');
}

test();
