import { cons, abs, gcd } from '../../util/index';

function make_rat(x, y) {
  const sign = x * y >= 0 ? 1 : -1;
  const g = gcd(x, y);
  return cons(sign * abs(x / g), abs(y / g));
}

export default make_rat;
