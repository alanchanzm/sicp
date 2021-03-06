import { is_even, square } from '../../util/index';

function fib(n) {
  return fib_iter();

  function fib_iter(a = 1, b = 0, p = 0, q = 1, count = n) {
    if (count === 0) return b;

    // A <- ap + (a+b)q
    // B <- bp + aq
    // a' <- Ap + (A+B)q <- a(p^2+q^2) + (a+b)(2pq+q^2)
    // b' <- Bp + Aq <- b(p^2+q^2) + a(2pq+q^2)
    // p' = p^2+q^2
    // q' = 2pq+q^2
    const new_p = square(p) + square(q);
    const new_q = 2 * p * q + square(q);
    if (is_even(count)) return fib_iter(a, b, new_p, new_q, count / 2);

    const new_a = b * q + a * q + a * p;
    const new_b = b * p + a * q;
    return fib_iter(new_a, new_b, p, q, count - 1);
  }
}

export default fib;
