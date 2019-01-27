import fn from '../../src/ch01/1.35';

test(`${fn.name} ---  --- 1.618`, () => {
  expect(fn()).toBeCloseTo(1.618);
});
