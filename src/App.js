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
    const input = document.getElementById('input0101').value.split('\n');
    const inputLength = input.length;

    for (let i = 0; i<inputLength-1; i++) {
      const firstValue = parseInt(input[i]);
      for (let j = i+1; j<inputLength; j++) {
        const secondValue = parseInt(input[j]);
        if (firstValue + secondValue === 2020) {
          console.log('Values: ', firstValue, secondValue);
          setAnswer0101(firstValue * secondValue);
        }
      }
    }
  }

  // ----------------------

  const [value0102, setValue0102] = useState(`1721
979
366
299
675
1456`);
  const [answer0102, setAnswer0102] = useState('');

  const updateInput0102 = (event) => {
    setValue0102(event.target.value);
  }

  const doTheMagic0102 = (event) => {
    event.preventDefault();
    const input = document.getElementById('input0102').value.split('\n');
    const inputLength = input.length;

    for (let i = 0; i<inputLength-2; i++) {
      const firstValue = parseInt(input[i]);
      for (let j = i+1; j<inputLength-1; j++) {
        const secondValue = parseInt(input[j]);
        for (let k = j+1; k<inputLength; k++) {
          const thirdValue = parseInt(input[k]);
          if (firstValue + secondValue + thirdValue === 2020) {
            console.log('Values: ', firstValue, secondValue, thirdValue);
            setAnswer0102(firstValue * secondValue * thirdValue);
          }
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
          <textarea rows="15" value={value0101} onChange={updateInput0101} id="input0101" required/>
          <button type="submit">Submit</button>
          <input type="text" id="answer" value={answer0101} readOnly />
        </form>

        <hr />

        <h3>Puzzle 2</h3>
        <form onSubmit={doTheMagic0102}>
          <textarea rows="15" value={value0102} onChange={updateInput0102} id="input0102" required/>
          <button type="submit">Submit</button>
          <input type="text" id="answer" value={answer0102} onChange={({target}) => setAnswer0102(target.value)}/>
        </form>

      </main>
    </div>
  );
}

export default App;
