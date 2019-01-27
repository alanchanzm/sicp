import fn from '../../src/ch01/1.03';

test(`${fn.name} --- 0,0,0 --- 0`, () => {
  expect(fn(0, 0, 0)).toBe(0);
});
test(`${fn.name} --- 1,2,3 --- 13`, () => {
  expect(fn(1, 2, 3)).toBe(13);
});
test(`${fn.name} --- 1,1,2 --- 5`, () => {
  expect(fn(1, 1, 2)).toBe(5);
});
test(`${fn.name} --- -3,0,1 --- 1`, () => {
  expect(fn(-3, 0, 1)).toBe(1);
});
