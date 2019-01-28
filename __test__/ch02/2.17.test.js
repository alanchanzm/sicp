import { list } from '../../util/index';
import fn from '../../src/ch02/2.17';

test(`${fn.name} --- list(23,72,149,34) --- 34`, () => {
  expect(fn(list(23, 72, 149, 34))).toBe(34);
});
