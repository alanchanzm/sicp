const pow = n => x => x ** n;
const square = pow(2);
const cube = pow(3);

const { abs } = Math;

const average = (x, y) => (x + y) / 2;

const is_odd = n => n % 2 === 1;
const is_even = n => n % 2 === 0;

const inc = n => n + 1;
const identity = x => x;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

function cons(x, y) {
  return function dispatch(m) {
    if (m === 0) return x;
    if (m === 1) return y;
    return new Error(`Argument not 0 or 1 -- CONS ${m}`);
  };
}

const car = () => 0;
const cdr = () => 1;

module.exports = {
  square,
  abs,
  average,
  cube,
  is_even,
  is_odd,
  inc,
  identity,
  gcd,
  cons,
  car,
  cdr,
};
