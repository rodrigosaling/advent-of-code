import { realInput, testInput } from './inputs';
import { countTheTrees, makeInputWideEnough } from './part-one';

describe('Day 3 Part one', () => {
  describe('using testInput', () => {
    it('should create a pattern matrix long enough for the toboggan reach the bottom', () => {
      const testInputAsArray = testInput.split('\n');

      const matrix = makeInputWideEnough(testInput);

      expect(matrix.length).toEqual(testInputAsArray.length);

      expect(matrix[matrix.length - 1].length).toBeGreaterThan(
        testInputAsArray.length * 3 + 1
      );
    });

    it('should find 7 trees', () => {
      const matrix = makeInputWideEnough(testInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(7);
    });
  });

  describe('using a custom input', () => {
    it('should find 5 trees', () => {
      const customInput = `.
#
#
#
#
#`;
      const matrix = makeInputWideEnough(customInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(5);
    });

    it('should find 5 trees', () => {
      const customInput = `................
...#............
......#.........
.........#......
............#...
...............#`;
      const matrix = makeInputWideEnough(customInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(5);
    });

    it('should find 0 trees', () => {
      const customInput = `................
................
................
................
................
................`;
      const matrix = makeInputWideEnough(customInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(0);
    });
  });

  describe('using realInput', () => {
    it('should create a pattern matrix long enough for the toboggan reach the bottom with the real input', () => {
      const realInputAsArray = realInput.split('\n');

      const matrix = makeInputWideEnough(realInput);

      expect(matrix.length).toEqual(realInputAsArray.length);

      expect(matrix[matrix.length - 1].length).toBeGreaterThan(
        (realInputAsArray.length * 3 + 1) / realInputAsArray[0].length
      );
    });

    it('should not find 255 and be greater than 255 trees', () => {
      const matrix = makeInputWideEnough(realInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).not.toEqual(255);
      expect(numberOfTrees).toBeGreaterThan(255);
    });

    it('SOLUTION: should find 257 trees', () => {
      const matrix = makeInputWideEnough(realInput);
      const numberOfTrees = countTheTrees(matrix, 3, 1);
      expect(numberOfTrees).toEqual(257);
    });
  });
});
