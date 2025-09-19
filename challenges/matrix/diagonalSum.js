const diagonalSum = (mat) => {
  let sum = 0;
  let n = mat.length;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }
  if (n % 2 !== 0) {
    const middleIndex = Math.floor(n / 2);
    const middleValue = mat[middleIndex][middleIndex];
    sum -= middleValue;
  }
  return sum;
};
