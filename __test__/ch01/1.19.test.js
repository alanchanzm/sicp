import fn from '../../src/ch01/1.19';

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55].forEach((ans, n) => {
  test(`${fn.name} --- ${n} --- ${ans}`, () => {
    expect(fn(n)).toBe(ans);
  });
});
