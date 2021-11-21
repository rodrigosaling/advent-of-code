import { initLog } from './log';

export const readLinesFrom = (id) => {
  const log = initLog(id);
  log('Reading the input...');
  return document.getElementById(`input${id}`).value.split('\n');
};
