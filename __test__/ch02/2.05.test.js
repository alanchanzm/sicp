import { cons, car, cdr } from '../../src/ch02/2.05';

test(`car --- cons(4,2) --- 4`, () => {
  expect(car(cons(4, 2))).toBe(4);
});
test(`cdr --- cons(4,2) --- 2`, () => {
  expect(cdr(cons(4, 2))).toBe(2);
});
