// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

const countPairs = (nums, k) => {
  const map = new Map();
  let tracker = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      for (const j of map.get(num)) {
        if ((i * j) % k === 0) tracker++;
      }

      map.get(num).push(i);
    } else {
      map.set(num, [i]);
    }
  }
  return tracker;
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
