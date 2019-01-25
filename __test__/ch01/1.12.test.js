import fn from '../../src/chapter 01/1.12';

test(`${fn.name} --- 1,1 --- 1`, () => {
  expect(fn(1, 1)).toBe(1);
});
test(`${fn.name} --- 3,2 --- 2`, () => {
  expect(fn(3, 2)).toBe(2);
});
test(`${fn.name} --- 5,5 --- 1`, () => {
  expect(fn(5, 5)).toBe(1);
});
test(`${fn.name} --- 6,2 --- 5`, () => {
  expect(fn(6, 2)).toBe(5);
});
test(`${fn.name} --- 2,4 --- ''`, () => {
  expect(fn(2, 4)).toBe('');
});
