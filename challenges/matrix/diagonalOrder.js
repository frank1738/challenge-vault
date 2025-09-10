//Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
const findDiagonalOrders = (mat) => {
  const rows = mat.length;
  const columns = mat[0].length;
  const map = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const sum = i + j;
      if (!map[sum]) map[sum] = [];
      map[sum].push(mat[i][j]);
    }
  }
  let res = [];
  for (let sum = 0; sum <= rows + columns - 2; sum++) {
    if (sum % 2 === 0) {
      res.push(...map[sum].reverse());
    } else {
      res.push(...map[sum]);
    }
  }

  return res;
};

console.log(
  findDiagonalOrders([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
