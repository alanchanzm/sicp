import fn from '../../src/chapter 01/1.17';

[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100].forEach((ans, n) => {
  test(`${fn.name} --- ${n},${n} --- ${ans}`, () => {
    expect(fn(n, n)).toBe(ans);
  });
});
