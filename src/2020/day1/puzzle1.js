import { useState } from 'react';
import { readLinesFrom } from '../../utils/read-lines-from';
import { initLog } from '../../utils/log';
import { realValue } from './input';
import { View } from '../../components/puzzle.view';

const id = '01';
const log = initLog(id);

export const searchTwoNumbersThatSum2020 = (input) => {
  const numberOfLines = input.length;

  log('Looking for TWO numbers that sum is equal to 2020.');
  for (let i = 0; i < numberOfLines - 1; i++) {
    const firstValue = parseInt(input[i]);
    for (let j = i + 1; j < numberOfLines; j++) {
      const secondValue = parseInt(input[j]);
      if (firstValue + secondValue === 2020) {
        log(`Found the values: ${firstValue} ${secondValue}`);
        return { firstValue, secondValue };
      }
    }
  }
  return null;
};

export const multiplyTwoValues = (val1, val2) => {
  const result = val1 * val2;
  log(`Returning the multiplication result: ${result}`);
  return result;
};

export const Puzzle1 = () => {
  const [inputValue, setInputValue] = useState(realValue);
  const [answer, setAnswer] = useState('');

  const doTheTruffleShuffle = (event) => {
    event.preventDefault();
    const input = readLinesFrom(id);

    const { firstValue, secondValue } = searchTwoNumbersThatSum2020(input);
    const result = multiplyTwoValues(firstValue, secondValue);
    setAnswer(result);

    log('----- End -----');
  };

  return (
    <View
      title="Puzzle 1"
      id={id}
      onSubmit={doTheTruffleShuffle}
      answer={answer}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};
