import { abs } from '../../util/index';

function golden_rate() {
  return fixed_point(x => 1 + 1 / x);
}

const TOLERANCE = 0.00001;

function fixed_point(f, guess = 42, tolerance = TOLERANCE) {
  return fixed_point_iter();

  function fixed_point_iter(current = guess) {
    const next = f(current);
    return close_enough(current, next) ? next : fixed_point_iter(next);
  }
  function close_enough(a, b) {
    return abs(a - b) < tolerance;
  }
}

export default golden_rate;
