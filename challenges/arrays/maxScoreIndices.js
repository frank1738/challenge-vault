//You are given a 0-indexed binary array nums of length n. nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright:

const maxScoreIndices = (nums) => {
  const n = nums.length;
  const totalOnes = nums.reduce((sum, val) => sum + (val === 1 ? 1 : 0), 0);
  let zerosLeft = 0;
  let onesRight = totalOnes;
  let maxScore = 0;
  let results = [];

  for (let i = 0; i <= n; i++) {
    const score = zerosLeft + onesRight;
    if (score > maxScore) {
      maxScore = score;
      results = [i];
    } else if (score === maxScore) {
      results.push(i);
    }

    if (i < n) {
      if (nums[i] === 0) {
        zerosLeft++;
      } else {
        onesRight--;
      }
    }
  }
  return results;
};

console.log(maxScoreIndices([0, 0, 0]));
