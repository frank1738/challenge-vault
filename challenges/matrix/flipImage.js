const flipImage = (image) => {
  const rows = image.length;
  const columns = image[0].length;
  for (let row = 0; row < rows; row++) {
    const currentRow = image[row];
    image[row] = currentRow.reverse();
    for (let col = 0; col < columns; col++) {
      if (image[row][col] === 0) {
        image[row][col] = 1;
      } else {
        image[row][col] = 0;
      }
    }
  }

  return image;
};

console.log(
  flipImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
