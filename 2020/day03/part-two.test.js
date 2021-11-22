import { realInput, testInput } from './inputs';
import { countTheTrees, makeInputWideEnough } from './part-one';

describe('Day 3 part two', () => {
  describe('using testInput', () => {
    it('should create a pattern matrix long enough for the toboggan reach the bottom', () => {
      const testInputAsArray = testInput.split('\n');
      const moveX = 7;

      const matrix = makeInputWideEnough(testInput, moveX);

      expect(matrix.length).toEqual(testInputAsArray.length);

      expect(matrix[matrix.length - 1].length).toBeGreaterThan(
        testInputAsArray.length * moveX + 1
      );
    });

    it('should find 2 trees moving 1 x 1', () => {
      const matrix = makeInputWideEnough(testInput, 1);
      const numberOfTrees = countTheTrees(matrix, 1, 1);
      expect(numberOfTrees).toEqual(2);
    });

    it('should find 7 trees moving 3 x 1', () => {
      const matrix = makeInputWideEnough(testInput, 3);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(7);
    });

    it('should find 3 trees moving 5 x 1', () => {
      const matrix = makeInputWideEnough(testInput, 5);
      const numberOfTrees = countTheTrees(matrix, 5, 1);
      expect(numberOfTrees).toEqual(3);
    });

    it('should find 4 trees moving 7 x 1', () => {
      const matrix = makeInputWideEnough(testInput, 7);
      const numberOfTrees = countTheTrees(matrix, 7, 1);
      expect(numberOfTrees).toEqual(4);
    });

    it('should find 2 trees moving 1 x 2', () => {
      const matrix = makeInputWideEnough(testInput, 1);
      const numberOfTrees = countTheTrees(matrix, 1, 2);
      expect(numberOfTrees).toEqual(2);
    });
  });

  describe('using a custom input', () => {
    it('should find 1 tree when moving 6 x 1', () => {
      const customInput = `.
#`;
      const matrix = makeInputWideEnough(customInput, 6);
      const numberOfTrees = countTheTrees(matrix, 6, 1);
      expect(numberOfTrees).toEqual(1);
    });

    it('should find 1 tree when moving 7 x 1', () => {
      const customInput = `.
#`;
      const matrix = makeInputWideEnough(customInput, 7);
      const numberOfTrees = countTheTrees(matrix, 7, 1);
      expect(numberOfTrees).toEqual(1);
    });

    it('should find 1 tree when moving 1 x 2', () => {
      const customInput = `.
.
#`;
      const matrix = makeInputWideEnough(customInput, 1);
      const numberOfTrees = countTheTrees(matrix, 1, 2);
      expect(numberOfTrees).toEqual(1);
    });

    it('should find 2 trees when moving 1 x 2', () => {
      const customInput = `.
.
#
.
#`;
      const matrix = makeInputWideEnough(customInput, 1);
      const numberOfTrees = countTheTrees(matrix, 1, 2);
      expect(numberOfTrees).toEqual(2);
    });

    it('should find 5 trees', () => {
      const customInput = `0
0123456#
01234560123456#
.....................#
............................#
...................................#`;
      const matrix = makeInputWideEnough(customInput);
      const numberOfTrees = countTheTrees(matrix, 7, 1);
      expect(numberOfTrees).toEqual(5);
    });
  });

  describe('using realInput', () => {
    it('SOLUTION: should multiply the number of trees for all slopes and be equal to 1744787392', () => {
      let result = 1;

      result *= countTheTrees(makeInputWideEnough(realInput, 1), 1, 1);
      result *= countTheTrees(makeInputWideEnough(realInput, 3), 3, 1);
      result *= countTheTrees(makeInputWideEnough(realInput, 5), 5, 1);
      result *= countTheTrees(makeInputWideEnough(realInput, 7), 7, 1);
      result *= countTheTrees(makeInputWideEnough(realInput, 1), 1, 2);

      expect(result).toEqual(1744787392);
    });
  });
});
