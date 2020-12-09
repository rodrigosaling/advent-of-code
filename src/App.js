import Navbar from "./components/navbar";
import {Day01Puzzle1} from "./2020/day01/puzzle1";
import {Day01Puzzle2} from "./2020/day01/puzzle2";

function App() {
  return (
    <div>
      <Navbar />

      <main className="p-4">
        <div className="tabs">
          <ul>
            <li className="is-active"><a>Day 1</a></li>
          </ul>
        </div>

        <p>For more information about the challenge, please visit: <a href="https://adventofcode.com/2020/day/1">https://adventofcode.com/2020/day/1</a></p>

        <Day01Puzzle1 />

        <hr />

        <Day01Puzzle2 />

      </main>
    </div>
  );
}

export default App;
