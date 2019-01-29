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

const car = z => z(0);
const cdr = z => z(1);
function cons(x, y) {
  function dispatch(m) {
    if (m === 0) return x;
    if (m === 1) return y;
    return new Error(`Argument not 0 or 1 -- CONS ${m}`);
  }
  dispatch[Symbol.toPrimitive] = function toPrimitive() {
    // let result = [];
    // let self = this;
    // while (car(self)) {
    //   result = [...result, car(self)];
    //   self = cdr(self);
    // }
    return car(this);
  };
  return dispatch;
}

function list(...items) {
  if (items.length === 0) return null;
  const [head, ...tail] = items;
  return cons(head, list(...tail));
}

function value_of(items) {
  return value_of_iter();

  function value_of_iter(conses = items, result = []) {
    const rest = cdr(conses);
    const new_result = [...result, car(conses)];
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
};
