import { is_even } from '../../util/index';

const double = x => x + x;
const halve = x => x / 2;

function multiplication(a, b) {
  if (a === 0 || b === 0) return 0;
  if (b === 1) return a;
  if (a === 1) return b;
  if (is_even(b)) return double(multiplication(a, halve(b)));
  return a + multiplication(a, b - 1);
}

export default multiplication;
export { double, halve };
