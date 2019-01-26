import { inc, is_even } from '../../util/index';

function simpsons_rules_integral(f, a, b, n) {
  const h = (b - a) / n;

  // term 为当前项
  // inc 用于累加循环
  return (h / 3) * sum(term, 0, inc, n);

  function term(k) {
    const y = f(a + k * h);
    switch (true) {
      case k === 0 || k === n: // for the first & last item
        return y;
      case is_even(k): // multiply 2 if 2k
        return 2 * y;
      default:
        return 4 * y;
    }
  }
}

function sum(term, a, next, b) {
  if (a > b) return 0;
  return term(a) + sum(term, next(a), next, b);
}

export default simpsons_rules_integral;
