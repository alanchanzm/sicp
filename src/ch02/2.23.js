const { car, cdr } = require('../../util/index');

function for_each(proc, items) {
  if (items !== null) {
    proc(car(items));
    for_each(proc, cdr(items));
  }
}

module.exports = for_each;
