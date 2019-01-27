import fn from '../../src/ch01/1.08';

[
  1000000,
  1000,
  1,
  0.001,
  0.000001,
  -1000000,
  -1000,
  -1,
  -0.001,
  -0.000001,
].forEach(num => {
  test(`${fn.name} --- ${num}`, () => {
    expect(fn(num) ** 3 / num).toBeLessThanOrEqual(1.01);
  });
});
