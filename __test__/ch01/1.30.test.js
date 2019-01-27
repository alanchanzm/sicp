import { cube, identity, inc } from '../../util/index';
import fn from '../../src/ch01/1.30';

test(`${fn.name} --- cube,1,inc,10 --- 3025`, () => {
  expect(fn(cube, 1, inc, 10)).toBe(3025);
});
test(`${fn.name} --- identity,1,inc,10 --- 55`, () => {
  expect(fn(identity, 1, inc, 10)).toBe(55);
});
