import fn from '../../src/chapter 01/1.35';

test(`${fn.name} ---  --- 1.618`, () => {
  expect(fn()).toBeCloseTo(1.618);
});
