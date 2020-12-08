import { useState } from 'react';

function App() {
  const [value, setValue] = useState(`1721
979
366
299
675
1456`);
  const [answer, setAnswer] = useState('');

  const updateInput = (event) => {
    setValue(event.target.value);
  }

  const doTheMagic = (event) => {
    event.preventDefault();
    const input = document.getElementById('input').value.split('\n');
    const inputLength = input.length;

    for (let i = 0; i<inputLength-1; i++) {
      for (let j = i+1; j<inputLength; j++) {
        const firstValue = parseInt(input[i]);
        const secondValue = parseInt(input[j]);
        // console.log(firstValue + secondValue);
        if (firstValue + secondValue === 2020) {
          setAnswer(firstValue * secondValue);
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
        <form onSubmit={doTheMagic}>
          <textarea rows="15" value={value} onChange={updateInput} id="input" required/>
          <button type="submit">Submit</button>
          <input type="text" id="answer" value={answer} readOnly />
        </form>
      </main>
    </div>
  );
}

export default App;
