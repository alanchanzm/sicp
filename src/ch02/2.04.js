// cons 返回一个函数，接收一个参数 m
// m 返回 m 执行的结果
function cons(x, y) {
  return function z(m) {
    return m(x, y);
  };
}

// cdr 接收一个参数 函数-z，返回 z 执行的结果
function cdr(z) {
  // (x, y) => y 就是函数 m
  return z((x, y) => y);
}

function car(z) {
  return z(x => x);
}

export { cons, car, cdr };
