const validMountainArray = (arr) => {
  if (arr.length < 3) return false;
  let mode = 'ascending';
  let peak = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return false;

    if (mode === 'ascending') {
      if (arr[i] < arr[i - 1]) {
        mode = 'descending';
        peak = i - 1;
      }
    } else {
      if (arr[i] > arr[i - 1]) return false;
    }
  }

  return mode === 'descending' && peak > 0 && peak < arr.length - 1;
};
