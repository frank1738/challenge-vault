//Given a 2D integer array matrix, return the transpose of matrix.

const transpose = (matrix) => {
  const columns = matrix[0].length;
  const rows = matrix.length;
  const result = [];

  for (let i = 0; i < columns; i++) {
    const temp = [];
    for (let j = 0; j < rows; j++) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
