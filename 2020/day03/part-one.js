export const makeInputWideEnough = (input) => {
  const moveX = 3;

  const inputLines = input.split('\n');

  // +1 because of the start position
  const howManyCopies = Math.ceil(
    (inputLines.length * moveX + 1) / inputLines[0].length
  );

  const matrix = [];

  for (let i = 0; i < inputLines.length; i += 1) {
    matrix[i] = inputLines[i].repeat(howManyCopies);
  }

  return matrix;
};

export const countTheTrees = (arrayOfStrings, moveX, moveY) => {
  let treesFound = 0;
  for (let lineIndex = 0; lineIndex < arrayOfStrings.length; lineIndex += 1) {
    const line = arrayOfStrings[lineIndex + moveY];
    if (line && line[(lineIndex + 1) * moveX] === '#') treesFound += 1;
  }
  return treesFound;
};
