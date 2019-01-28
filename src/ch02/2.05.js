import fast_expt from '../ch01/1.16';

function cons(a, b) {
  return fast_expt(2, a) * fast_expt(3, b);
}

function car(p) {
  const car_iter = make_iter(2);
  return car_iter(p);
}

function cdr(p) {
  const cdr_iter = make_iter(3);
  return cdr_iter(p);
}

function make_iter(n) {
  return function iter(p, t = 0) {
    if (p % n !== 0) return t;
    return iter(p / n, t + 1);
  };
}

export { cons, car, cdr };
