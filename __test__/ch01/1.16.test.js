import fn from '../../src/ch01/1.16';

[1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].forEach((ans, n) => {
  test(`${fn.name} --- 2,${n} --- ${ans}`, () => {
    expect(fn(2, n)).toBe(ans);
  });
});
