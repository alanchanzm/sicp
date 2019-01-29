const { is_pair, cons, car, cdr } = require('../../util/index');

function tree_map(proc, tree) {
  if (tree === null) return null;

  // check head = car(tree)
  // if it is pair, map head recursively
  // if not, proc(head)
  const head = car(tree);
  if (!is_pair(head)) return cons(proc(head), tree_map(proc, cdr(tree)));
  return cons(tree_map(proc, head), tree_map(proc, cdr(tree)));
}

module.exports = tree_map;
