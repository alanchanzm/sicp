import { list, car, cdr } from '../../util/index';
import fn from '../../src/ch02/2.18';

test(`${fn.name} --- list(23,72,149,34)`, () => {
  let reversed_list = fn(list(23, 72, 149, 34));
  expect(car(reversed_list)).toBe(34);
  reversed_list = cdr(reversed_list);
  expect(car(reversed_list)).toBe(149);
  reversed_list = cdr(reversed_list);
  expect(car(reversed_list)).toBe(72);
  reversed_list = cdr(reversed_list);
  expect(car(reversed_list)).toBe(23);
});
