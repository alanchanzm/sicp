const { list, value_of } = require('../../util/index');
const { square_list, square_map_list } = require('../../src/ch02/2.21');

test(`square_list --- list(1,2,3,4) --- [1,4,9,16]`, () => {
  expect(value_of(square_list(list(1, 2, 3, 4)))).toEqual([1, 4, 9, 16]);
});
test(`square_map_list --- list(1,2,3,4) --- [1,4,9,16]`, () => {
  expect(square_map_list(square_list(list(1, 2, 3, 4)))).toEqual([1, 4, 9, 16]);
});
