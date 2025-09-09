// Write a function that reverses a string. The input string is given as an array of characters s.

const reverseString = (s) => {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]];
    leftPointer++;
    rightPointer--;
  }
};
