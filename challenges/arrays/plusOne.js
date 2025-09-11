//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

const plusOne = (digits) => {
  let curry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + curry;
    digits[i] = sum % 10;
    curry = Math.floor(sum / 10);
    if (curry === 0) break;
  }
  if (curry > 0) digits.unshift(curry);

  return digits;
};

console.log(plusOne([9]));
