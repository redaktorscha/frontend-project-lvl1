import generateRandInt from '../common/generateRandInt.js';

/**
 * @type {string}
 */
export const gameRule = 'What number is missing in this progression?';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
  /**
   * @param {number} len sequence length
   * @param {number} interval random num
   * @returns {Array<number|string>}
   */
  const createSequence = (len, interval) => {
    const sequence = [];
    const missingIndex = generateRandInt(len);
    const gap = generateRandInt(interval) + 1;
    const start = generateRandInt(interval);

    let sequenceElem = start;
    for (let i = 0; i < len; i += 1) {
      sequence.push(sequenceElem);
      sequenceElem += gap;
    }
    const missingElem = sequence[missingIndex];
    sequence.push(missingElem);
    sequence[missingIndex] = '..';
    return sequence;
  };

  const seqLen = 10;
  const range = 10;
  const input = createSequence(seqLen, range);

  const answer = input.slice(-1).toString();
  const task = `Question: ${input.slice(0, -1).join(' ')}.`;
  return [task, answer];
};
