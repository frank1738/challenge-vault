const maxSum = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  let maxSum = 0;
  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= columns - 3; j++) {
      let currentSum = 0;
      currentSum += grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
      currentSum += grid[i + 1][j + 1];
      currentSum += grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};
