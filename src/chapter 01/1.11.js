function f_recursive(n) {
  if (n < 3) return n;
  return f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3);
}

function f_iterative(n) {
  if (n < 3) return n;
  return f_iterative_iter();

  /**
   *  计算结果需要 3 个算子， f(n-1), f(n-2), f(n-3)， 分别保存在 a, b, c 中
   * @param {number} count 记录当前计算的 n，从 n-2 开始(因为 n 必然大于 2)
   * @param {number} a 记录上一轮计算出的结果
   * @param {number} b
   * @param {number} c
   */
  function f_iterative_iter(count = n - 2, a = 2, b = 1, c = 0) {
    if (count === 0) return a;
    return f_iterative_iter(count - 1, a + 2 * b + 3 * c, a, b);
  }
}

function test() {
  // for (value, index) in the array
  // value is answer
  // index is n
  [0, 1, 2, 4, 11, 25, 59, 142, 335, 796, 1892].forEach((ans, n) => {
    if (f_recursive(n) !== ans) {
      throw new Error(
        `f_recursive(${n}) should be ${ans}, not ${f_recursive(n)}`
      );
    }
    if (f_iterative(n) !== ans) {
      throw new Error(
        `f_iterative(${n}) should be ${ans}, not ${f_iterative(n)}`
      );
    }
  });
  console.log('tests pass');
}

test();
