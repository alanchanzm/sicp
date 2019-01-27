import { cont_frac_iterative, cont_frac_recursive } from '../../src/ch01/1.37';

const n = () => 1;
const d = () => 1;
const golden_ratio = 1.6180339887;
test(`cont_frac_iterative --- n,d,12 --- ${golden_ratio}`, () => {
  expect(1 / cont_frac_iterative(n, d, 12)).toBeCloseTo(golden_ratio, 4);
});
test(`cont_frac_recursive --- n,d,12 --- ${golden_ratio}`, () => {
  expect(1 / cont_frac_recursive(n, d, 12)).toBeCloseTo(golden_ratio, 4);
});
