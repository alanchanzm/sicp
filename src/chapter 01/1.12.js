function pascal_triangle(row, col) {
  if (col > row) return '';
  if (col === 1 || col === row) return 1;
  return pascal_triangle(row - 1, col - 1) + pascal_triangle(row - 1, col);
}

export default pascal_triangle;
