import { useState } from 'react';
import { readLinesFrom } from '../../utils/read-lines-from';
import { initLog } from '../../utils/log';
import { realValue } from './input';
import { View } from '../../components/puzzle.view';
import { transformStringIntoObject } from './puzzle1';

const id = '02';
const log = initLog(id);

export const checkIfCharIsAtPositions = ({
  char,
  password,
  range: { min: position1, max: position2 },
}) => {
  return (
    (char === password[position1 - 1] && char !== password[position2 - 1]) ||
    (char !== password[position1 - 1] && char === password[position2 - 1])
  );
};

export const countNumberOfValidPasswords = (input) => {
  let numberValidPasswords = 0;
  log('Iterating list');
  for (const line of input) {
    const info = transformStringIntoObject(line);
    if (checkIfCharIsAtPositions(info)) {
      log(`Valid password: ${line} ✅`);
      numberValidPasswords += 1;
    } else {
      log(`Not Valid password: ${line} 🚫`);
    }
  }
  return numberValidPasswords;
};

export const Puzzle2 = () => {
  const [inputValue, setInputValue] = useState(realValue);
  const [answer, setAnswer] = useState('');

  const doTheTruffleShuffle = (event) => {
    event.preventDefault();
    const input = readLinesFrom(id);

    const result = countNumberOfValidPasswords(input);
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
