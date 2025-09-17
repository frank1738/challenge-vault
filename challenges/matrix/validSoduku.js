const isValidSudoku = (board) => {
  const seen = new Set();
  const rows = board.length;
  const columns = board.length;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const currentVal = board[row][column];
      if (currentVal !== '.') {
        const rowKey = `row-${row}-${currentVal}`;
        const columnKey = `col-${column}-${currentVal}`;
        const boxKey = `box-${Math.floor(row / 3)}-${Math.floor(
          column / 3
        )}-${currentVal}`;
        if (seen.has(rowKey) || seen.has(columnKey) || seen.has(boxKey)) {
          return false;
        }
        seen.add(rowKey);
        seen.add(columnKey);
        seen.add(boxKey);
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
