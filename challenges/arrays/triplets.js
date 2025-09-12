const increasingTriplet = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let n of nums) {
    if (n <= first) {
      first = n;
    } else if (n <= second) {
      second = n;
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
