const { map, square, is_pair, cons, car, cdr } = require('../../util/index');

function square_tree(tree) {
  if (tree === null) return null;
  if (!is_pair(tree)) return square(tree);
  return cons(square_tree(car(tree)), square_tree(cdr(tree)));
}

function square_map_tree(tree) {
  return map(sub_tree => {
    if (is_pair(sub_tree)) return square_map_tree(sub_tree);
    return square(sub_tree);
  }, tree);
}

module.exports = {
  square_tree,
  square_map_tree,
};
