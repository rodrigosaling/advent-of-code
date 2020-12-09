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

      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h1 className="">Advent of Code</h1>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              2020
            </a>
          </div>
        </div>
      </nav>
      <header>

      </header>

      <main className="p-4">
        <div className="tabs">
          <ul>
            <li className="is-active"><a>Day 1</a></li>
            <li><a>Day 2</a></li>
            <li><a>Day 3</a></li>
            <li><a>Day 4</a></li>
          </ul>
        </div>
        <p><a href="https://adventofcode.com/2020/day/1">https://adventofcode.com/2020/day/1</a></p>

        <h3 className="is-size-3">Puzzle 1</h3>
        <form onSubmit={doTheMagic0101}>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Input</label>
                <div className="control">
                  <textarea rows="15" value={value0101} onChange={updateInput0101} id="input0101" required className="textarea"/>
                </div>
              </div>
              <button type="submit" className="button is-primary">Submit</button>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Answer</label>
                <div className="control">
                  <input type="text" id="answer0101" value={answer0101} readOnly className="input" />
                </div>
              </div>
            </div>
          </div>
        </form>

        <hr />

        <h3 className="is-size-3">Puzzle 2</h3>
        <form onSubmit={doTheMagic0102}>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Input</label>
                <div className="control">
                  <textarea rows="15" value={value0102} onChange={updateInput0102} id="input0102" required className="textarea"/>
                </div>
              </div>

              <button type="submit" className="button is-primary">Submit</button>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Answer</label>
                <div className="control">
                  <input type="text" id="answer0102" value={answer0102} readOnly className="input"/>
                </div>
              </div>
            </div>
          </div>
        </form>

      </main>
    </div>
  );
}

export default App;
