function accumulate_recursive(combiner, null_value, term, a, next, b) {
  if (a > b) return null_value;
  return combiner(
    term(a),
    accumulate_recursive(combiner, null_value, term, next(a), next, b)
  );
}

function accumulate_iterative(combiner, null_value, term, a, next, b) {
  return accumulate_iterative_iter();

  function accumulate_iterative_iter(x = a, result = null_value) {
    if (x > b) return result;
    return accumulate_iterative_iter(next(x), combiner(result, term(x)));
  }
}

export { accumulate_recursive, accumulate_iterative };
