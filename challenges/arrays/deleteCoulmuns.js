//You are given an array of n strings strs, all of the same length.

const minDeletionSize = (strs) => {
  const columns = strs[0].length;
  const rows = strs.length;
  let res = 0;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        res++;
        break;
      }
    }
  }
  return res;
};

console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
