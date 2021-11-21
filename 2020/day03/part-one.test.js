import { realInput, testInput } from './inputs';
import { countTheTrees, makeInputWideEnough } from './part-one';

describe('Day 3 Part one', () => {
  it('should create a pattern matrix long enough for the toboggan reach the bottom', () => {
    const testInputAsArray = testInput.split('\n');

    const matrix = makeInputWideEnough(testInput);

    expect(matrix.length).toEqual(testInputAsArray.length);

    expect(matrix[matrix.length - 1].length).toBeGreaterThan(
      (testInputAsArray.length * 3 + 1) / testInputAsArray[0].length
    );
  });

  it('should find 7 trees using the testInput', () => {
    const matrix = makeInputWideEnough(testInput);
    const numberOfTrees = countTheTrees(matrix, 3, 1);
    expect(numberOfTrees).toEqual(7);
  });

  it('should not find 255 trees using the realInput', () => {
    const matrix = makeInputWideEnough(realInput);
    const numberOfTrees = countTheTrees(matrix, 3, 1);
    expect(numberOfTrees).not.toEqual(255);
  });
});
