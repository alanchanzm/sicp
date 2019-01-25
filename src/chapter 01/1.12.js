function pascal_triangle(row, col) {
  if (col > row) return '';
  if (col === 1 || col === row) return 1;
  return pascal_triangle(row - 1, col - 1) + pascal_triangle(row - 1, col);
}

function test(n = 6) {
  let row = 1;
  let col = 1;
  let nums = [];
  while (row <= n) {
    while (col <= row) {
      nums = [...nums, pascal_triangle(row, col)];
      col += 1;
    }
    console.log(nums.join(' '));
    nums = [];
    col = 1;
    row += 1;
  }
}

test();
