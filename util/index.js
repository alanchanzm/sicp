const pow = n => x => x ** n;
const square = pow(2);
const cube = pow(3);

const { abs } = Math;

const average = (x, y) => (x + y) / 2;

const is_odd = n => n % 2 === 1;
const is_even = n => n % 2 === 0;

const inc = n => n + 1;
const identity = x => x;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const car = z => z[0];
const cdr = z => z[1];
function cons(x, y) {
  return [x, y];
}

function list(...items) {
  const [head, ...tail] = items;
  if (head === undefined) return null;
  return cons(head, list(...tail));
}

const is_pair = x => Array.isArray(x) && x.length === 2;
function value_of(cons_list) {
  return value_of_iter();

  function value_of_iter(conses = cons_list, result = []) {
    const head = car(conses);
    const rest = cdr(conses);
    const new_result = [...result, is_pair(head) ? value_of(head) : head];
    if (rest === null) return new_result;
    return value_of_iter(rest, new_result);
  }
}

function map(proc, items) {
  if (items === null) return null;
  return cons(proc(car(items)), map(proc, cdr(items)));
}

module.exports = {
  square,
  abs,
  average,
  cube,
  is_even,
  is_odd,
  inc,
  identity,
  gcd,
  cons,
  car,
  cdr,
  list,
  map,
  value_of,
  is_pair,
};
