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

class Cons {
  constructor(x, y) {
    this.car = x;
    this.cdr = y;
  }

  get car() {
    return this.car;
  }

  get cdr() {
    return this.cdr;
  }
}

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
  Cons,
};
