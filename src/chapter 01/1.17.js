const { is_even } = require('../util/index');

const double = x => x + x;
const halve = x => x / 2;

function multiplication(a, b) {
  if (a === 0 || b === 0) return 0;
  if (b === 1) return a;
  if (a === 1) return b;
  if (is_even(b)) return double(multiplication(a, halve(b)));
  return a + multiplication(a, b - 1);
}

function test(fn) {
  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100].forEach((ans, n) => {
    if (fn(n, n) !== ans) {
      throw new Error(
        `${fn.name}(${n}, ${n}) should be ${ans}, 
        not ${fn(n, n)}`
      );
    }
  });
  console.log('tests pass');
}

test(multiplication);

module.exports = {
  double,
  halve,
  test,
};
