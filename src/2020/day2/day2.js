import { Puzzle1 } from './puzzle1';
import { Puzzle2 } from './puzzle2';

export const Day2 = () => (
  <>
    <p>
      For more information about the challenge, please visit:{' '}
      <a href="https://adventofcode.com/2020/day/2">
        https://adventofcode.com/2020/day/2
      </a>
    </p>

    <Puzzle1 />

    <hr />

    <Puzzle2 />

    <hr />

    <h2 className="is-size-2">Notes:</h2>

    <p className="mb-4">
      I will try a TDD-ish approach to this puzzle. Write some tests before the
      actual code.
    </p>
    <p>
      Followed TDD a couple of times then ended creating the code first and then
      the tests.
    </p>
  </>
);
