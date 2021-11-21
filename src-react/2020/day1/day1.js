import { Puzzle1 } from './puzzle1';
import { Puzzle2 } from './puzzle2';

export const Day1 = () => (
  <>
    <p>
      For more information about the challenge, please visit:{' '}
      <a href="https://adventofcode.com/2020/day/1">
        https://adventofcode.com/2020/day/1
      </a>
    </p>

    <Puzzle1 />

    <hr />

    <Puzzle2 />

    <hr />

    <p className="mb-4">
      A lot of changes were made after building the code to answer the puzzles.
      For example, there were no unit tests, and the "truffle shuffle" function
      was responsible for all the logic.
    </p>

    <p>
      Now there are separated functions that take care of each part of the
      solution, as well some tests that are based on the puzzle description. But
      more improvements can be made, maybe in the future.
    </p>
  </>
);
