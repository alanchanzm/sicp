function cont_frac_iterative(n, d, k) {
  return cont_frac_iter();

  function cont_frac_iter(count = k, result = 0) {
    if (count === 0) return result;
    return cont_frac_iter(count - 1, n(count) / (d(count) + result));
  }
}

function cont_frac_recursive(n, d, k) {
  const N = n(k);
  const D = d(k);
  if (k === 1) return N / D;
  return N / (D + cont_frac_recursive(n, d, k - 1));
}

export { cont_frac_iterative, cont_frac_recursive };
