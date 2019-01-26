function sum(term, a, next, b) {
  return sum_iter();

  function sum_iter(x = a, result = 0) {
    if (x > b) return result;
    return sum_iter(next(x), result + term(x));
  }
}

export default sum;
