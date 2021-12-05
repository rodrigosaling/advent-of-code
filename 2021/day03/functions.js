import fromInputToArray from '../../utils/from-input-to-array';

export const returnPowerConsumption = (input) => {
  const lines = fromInputToArray(input);
  const positions = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const bit = line[j];
      if (!positions[j]) {
        positions[j] = { count0: 0, count1: 0 };
      }
      if (bit === '0') {
        positions[j].count0++;
      } else {
        positions[j].count1++;
      }
    }
  }

  let gammaMostCommon = '';
  let epsilonLeastCommon = '';
  for (let i = 0; i < positions.length; i++) {
    const { count0, count1 } = positions[i];
    let mostCommon = '';
    let leastCommon = '';
    if (count0 > count1) {
      mostCommon = '0';
      leastCommon = '1';
    } else {
      mostCommon = '1';
      leastCommon = '0';
    }
    gammaMostCommon = `${gammaMostCommon}${mostCommon}`;
    epsilonLeastCommon = `${epsilonLeastCommon}${leastCommon}`;
  }

  return parseInt(gammaMostCommon, 2) * parseInt(epsilonLeastCommon, 2);
};
