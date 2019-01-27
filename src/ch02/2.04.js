function cons(x, y) {
  return m => m(x, y);
}

function car(z) {
  return z(p => p);
}

function cdr(z) {
  return z((_, q) => q);
}

export { cons, car, cdr };
