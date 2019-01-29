const { list, value_of } = require('../../util/index');
const { square_tree, square_map_tree } = require('../../src/ch02/2.30');

test(`square_tree --- list(1,list(2,list(3,4),5),list(6,7)) --- [1,[4,[9,16],25],[36,49]]`, () => {
  expect(
    value_of(square_tree(list(1, list(2, list(3, 4), 5), list(6, 7))))
  ).toEqual([1, [4, [9, 16], 25], [36, 49]]);
});
test(`square_map_tree --- list(1,list(2,list(3,4),5),list(6,7)) --- [1,[4,[9,16],25],[36,49]]`, () => {
  expect(
    value_of(square_map_tree(list(1, list(2, list(3, 4), 5), list(6, 7))))
  ).toEqual([1, [4, [9, 16], 25], [36, 49]]);
});
