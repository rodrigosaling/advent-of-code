import { useState } from 'react';
import { readLinesFrom } from '../../utils/read-lines-from';
import { initLog } from '../../utils/log';
import { realValue } from './input';
import { View } from '../../components/puzzle.view';

const id = '01';
const log = initLog(id);

export const transformStringIntoObject = (string) => {
  const [validation, password] = string.split(': ');
  const [range, char] = validation.split(' ');
  const [min, max] = range.split('-');

  return {
    password,
    char,
    range: { min: parseInt(min), max: parseInt(max) },
  };
};

export const Puzzle1 = () => {
  const [inputValue, setInputValue] = useState(realValue);
  const [answer, setAnswer] = useState('');

  const doTheTruffleShuffle = (event) => {
    event.preventDefault();
    const input = readLinesFrom(id);

    const result = '';
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
