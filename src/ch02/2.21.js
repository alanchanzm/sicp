const { cons, car, cdr, map, square } = require('../../util/index');

function square_list(items) {
  if (items === null) return null;
  return cons(square(car(items)), square_list(cdr(items)));
}

function square_map_list(items) {
  return map(square, items);
}

module.exports = {
  square_list,
  square_map_list,
};
