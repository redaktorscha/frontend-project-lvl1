import generateNumber from '../utils.js';

/**
 * @type {string}
 */
export const description = 'What number is missing in this progression?';

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
    const missingIndex = generateNumber(len);
    const gap = generateNumber(interval) + 1;
    const start = generateNumber(interval);

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

  const sequenceLength = 10;
  const range = 10;
  const randomSequence = createSequence(sequenceLength, range);

  const answer = randomSequence.slice(-1).toString();
  const question = `Question: ${randomSequence.slice(0, -1).join(' ')}.`;
  return [question, answer];
};
