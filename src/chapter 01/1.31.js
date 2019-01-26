function product_recursive(term, a, next, b) {
  if (a > b) return 1;
  return term(a) * product_recursive(term, next(a), next, b);
}

function product_iterative(term, a, next, b) {
  return product_iterative_iter();

  function product_iterative_iter(x = a, result = 1) {
    if (x > b) return result;
    return product_iterative_iter(next(x), result * term(x));
  }
}

export { product_recursive, product_iterative };
