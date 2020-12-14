import { useState } from 'react';
import { readLinesFrom } from '../../utils/read-lines-from';
import { initLog } from '../../utils/log';
import { realValue } from './input';

const id = '01';
const log = initLog(id);

export const searchTwoValuesThatSum2020 = (input) => {
  const numberOfLines = input.length;

  log('Looking for TWO numbers that sum is equal to 2020.');
  for (let i = 0; i < numberOfLines - 1; i++) {
    const firstValue = parseInt(input[i]);
    for (let j = i + 1; j < numberOfLines; j++) {
      const secondValue = parseInt(input[j]);
      if (firstValue + secondValue === 2020) {
        log(`Found the values: ${firstValue} ${secondValue}`);
        const result = firstValue * secondValue;
        log(`Returning the multiplication result: ${result}`);
        return result;
      }
    }
  }
};

export const Puzzle1 = () => {
  const [inputValue, setInputValue] = useState(realValue);
  const [answer, setAnswer] = useState('');

  const doTheTruffleShuffle = (event) => {
    event.preventDefault();
    const input = readLinesFrom(id);

    setAnswer(searchTwoValuesThatSum2020(input));

    log('----- End -----');
  };

  return (
    <div>
      <h3 className="is-size-3">Puzzle 1</h3>
      <form onSubmit={doTheTruffleShuffle}>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Input</label>
              <div className="control">
                <textarea
                  rows="10"
                  value={inputValue}
                  onChange={({ target }) => setInputValue(target.value)}
                  id={`input${id}`}
                  required
                  className="textarea is-small"
                />
              </div>
            </div>

            <button type="submit" className="button is-primary">
              Do the truffle shuffle
            </button>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Answer</label>
              <div className="control">
                <input
                  type="text"
                  id={`answer${id}`}
                  value={answer}
                  readOnly
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Logs</label>
              <div
                className="control"
                style={{ maxHeight: 200, overflow: 'auto' }}
              >
                <pre id={`logs${id}`} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
