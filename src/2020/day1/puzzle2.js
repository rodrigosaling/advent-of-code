import { useState } from 'react';
import { readLinesFrom } from '../../utils/read-lines-from';
import { initLog } from '../../utils/log';
import { realValue } from './input';
import { View } from '../../components/puzzle.view';

const id = '02';
const log = initLog(id);

export const searchThreeNumbersThatSum2020 = (input) => {
  const numberOfLines = input.length;

  log('Looking for THREE numbers that sum is equal to 2020.');
  for (let i = 0; i < numberOfLines - 2; i++) {
    const firstValue = parseInt(input[i]);
    for (let j = i + 1; j < numberOfLines - 1; j++) {
      const secondValue = parseInt(input[j]);
      for (let k = j + 1; k < numberOfLines; k++) {
        const thirdValue = parseInt(input[k]);
        if (firstValue + secondValue + thirdValue === 2020) {
          log(`Found the values: ${firstValue} ${secondValue} ${thirdValue}`);
          return { firstValue, secondValue, thirdValue };
        }
      }
    }
  }
};

export const multiplyThreeValues = (val1, val2, val3) => {
  const result = val1 * val2 * val3;
  log(`Returning the multiplication result: ${result}`);
  return result;
};

export const Puzzle2 = () => {
  const [inputValue, setInputValue] = useState(realValue);
  const [answer, setAnswer] = useState('');

  const doTheTruffleShuffle = (event) => {
    event.preventDefault();
    const input = readLinesFrom(id);

    const {
      firstValue,
      secondValue,
      thirdValue,
    } = searchThreeNumbersThatSum2020(input);
    const result = multiplyThreeValues(firstValue, secondValue, thirdValue);
    setAnswer(result);

    log('----- End -----');
  };

  return (
    <View
      title="Puzzle 2"
      id={id}
      onSubmit={doTheTruffleShuffle}
      answer={answer}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};
