export const getRow = (rows) => {
  const [finalMin] = rows.split('').reduce(
    (previous, current, index) => {
      const [min, max] = previous;
      const difference = 128 / 2 ** (index + 1);

      if (current === 'F') {
        // lower half
        return [min, max - difference];
      }
      // upper half
      return [min + difference, max];
    },
    [1, 128]
  );
  return finalMin - 1;
};

export const getColumn = (columns) => {
  const [finalMin] = columns.split('').reduce(
    (previous, current, index) => {
      const [min, max] = previous;
      const difference = 8 / 2 ** (index + 1);

      if (current === 'L') {
        // lower half
        return [min, max - difference];
      }
      // upper half
      return [min + difference, max];
    },
    [1, 8]
  );
  return finalMin - 1;
};

export const getSeatID = (boardingPass) => {
  const rows = boardingPass.slice(0, 7);
  const columns = boardingPass.slice(-3);

  const row = getRow(rows);
  const column = getColumn(columns);

  return row * 8 + column;
};

export const getHighestSeatID = (listBoardingPasses) => {
  const boardingPassesArray = listBoardingPasses.split('\n');
  return boardingPassesArray.reduce((previous, current) => {
    const seatID = getSeatID(current);
    return Math.max(previous, seatID);
  }, 0);
};
