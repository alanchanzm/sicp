import fn from '../../src/chapter 01/1.07';

[1000000, 1000, 1, 0.001, 0.000001].forEach(num => {
  test(`${fn.name} --- ${num}`, () => {
    expect(fn(num) ** 2 / num - 1).toBeLessThanOrEqual(1.01);
  });
});
