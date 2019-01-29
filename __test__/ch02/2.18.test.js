import { list, value_of } from '../../util/index';
import fn from '../../src/ch02/2.18';

test(`${fn.name} --- list(23,72,149,34) --- [34,149,72,23]`, () => {
  expect(value_of(fn(list(23, 72, 149, 34)))).toEqual([34, 149, 72, 23]);
});
