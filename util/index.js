const pow = n => x => x ** n;
const square = pow(2);
const cube = pow(3);

const { abs } = Math;

const average = (x, y) => (x + y) / 2;

const is_odd = n => n % 2 === 1;
const is_even = n => n % 2 === 0;

const inc = n => n + 1;
const identity = x => x;

module.exports = {
  square,
  abs,
  average,
  cube,
  is_even,
  is_odd,
  inc,
  identity,
};
