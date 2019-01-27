const { abs } = Math;
const average = (x, y) => (x + y) / 2;
const TOLERANCE = 0.00001;

const q = x => Math.log(1000) / Math.log(x);
const print = (term, param) => {
  console.group(term.name);
  term(param);
  console.groupEnd();
};

print(fixed_point, q);
print(fixed_point, x => average(x, q(x)));

function fixed_point(f, guess = 42, tolerance = TOLERANCE) {
  let count = 0;
  return fixed_point_iter();

  function fixed_point_iter(current = guess) {
    const next = f(current);
    console.log(`No.${(count += 1)}: ${next}`);
    return close_enough(current, next) ? next : fixed_point_iter(next);
  }
  function close_enough(a, b) {
    return abs(a - b) < tolerance;
  }
}
