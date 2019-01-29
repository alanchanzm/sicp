const { list, value_of, square } = require('../../util/index');
const fn = require('../../src/ch02/2.31');

test(`square_tree --- list(1,list(2,list(3,4),5),list(6,7)) --- [1,[4,[9,16],25],[36,49]]`, () => {
  const tree = list(1, list(2, list(3, 4), 5), list(6, 7));
  const square_tree = () => fn(square, tree);
  expect(value_of(square_tree())).toEqual([1, [4, [9, 16], 25], [36, 49]]);
});
