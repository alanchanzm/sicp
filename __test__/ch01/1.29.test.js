import { cube } from '../../util/index';
import fn from '../../src/ch01/1.29';

test(`${fn.name} --- cube,0,1,100 --- 0.25`, () => {
  expect(fn(cube, 0, 1, 100)).toBeCloseTo(0.25);
});
test(`${fn.name} --- cube,0,1,1000 --- 0.25`, () => {
  expect(fn(cube, 0, 1, 1000)).toBeCloseTo(0.25);
});
