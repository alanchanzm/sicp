/* eslint-disable no-unused-vars */

const zero = f => x => x;
const add_1 = n => f => x => f(n(f)(x));

const one = f => x => f(x);
const two = f => x => f(f(x));
