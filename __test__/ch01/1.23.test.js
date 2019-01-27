import fn from '../../src/ch01/1.23';

test(`${fn.name} --- 199 --- 199`, () => {
  expect(fn(199)).toBe(199);
});
test(`${fn.name} --- 1999 --- 1999`, () => {
  expect(fn(1999)).toBe(1999);
});
test(`${fn.name} --- 19999 --- 7`, () => {
  expect(fn(19999)).toBe(7);
});
