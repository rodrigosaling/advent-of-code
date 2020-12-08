import { useState } from 'react';

function App() {
  const [value0101, setValue0101] = useState(`1721
979
366
299
675
1456`);
  const [answer0101, setAnswer0101] = useState('');

  const updateInput0101 = (event) => {
    setValue0101(event.target.value);
  }

  const doTheMagic0101 = (event) => {
    event.preventDefault();
    const input = document.getElementById('input').value.split('\n');
    const inputLength = input.length;

    for (let i = 0; i<inputLength-1; i++) {
      for (let j = i+1; j<inputLength; j++) {
        const firstValue = parseInt(input[i]);
        const secondValue = parseInt(input[j]);
        // console.log(firstValue + secondValue);
        if (firstValue + secondValue === 2020) {
          setAnswer0101(firstValue * secondValue);
        }
      }
    }
  }

  return (
    <div>
      <header>
        <h1>Advent of Code</h1>
      </header>

      <main>
        <h2>Day 1</h2>
        <h3>Puzzle 1</h3>
        <form onSubmit={doTheMagic0101}>
          <textarea rows="15" value={value0101} onChange={updateInput0101} id="input" required/>
          <button type="submit">Submit</button>
          <input type="text" id="answer" value={answer0101} readOnly />
        </form>
      </main>
    </div>
  );
}

export default App;
