function pow(n) {
  return x => x ** n;
}

const square = pow(2);
const cube = pow(3);

const { abs } = Math;

function average(x, y) {
  return (x + y) / 2;
}

module.exports = {
  square,
  abs,
  average,
  cube,
};
