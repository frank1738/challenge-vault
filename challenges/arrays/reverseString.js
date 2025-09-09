// Write a function that reverses a string. The input string is given as an array of characters s.

const reverseString = (s) => {
  let rightPointer = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (i >= rightPointer) return s;
    const temp = s[i];
    s[i] = s[rightPointer];
    s[rightPointer] = temp;
    rightPointer--;
  }
};

console.log(reverseString(['a', 'b', 'c', 'd', 'e']));
