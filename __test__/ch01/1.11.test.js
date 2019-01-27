import { f_recursive, f_iterative } from '../../src/ch01/1.11';

[0, 1, 2, 4, 11, 25, 59, 142, 335, 796, 1892].forEach((ans, n) => {
  test(`f_recursive --- ${n} --- ${ans}`, () => {
    expect(f_recursive(n)).toBe(ans);
  });
  test(`f_iterative --- ${n} --- ${ans}`, () => {
    expect(f_iterative(n)).toBe(ans);
  });
});
