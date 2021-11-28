import generateRandInt from '../generateRandInt.js';

/**
 * makes random sequence
 * @param {number} len sequence length
 * @param {number} interval random num
 * @returns {Array<number|string>}
 */
const createSequence = (len, interval) => {
  const sequence = [];
  const missingIdx = generateRandInt(len); // index of the missing number '..'
  const gap = generateRandInt(interval) + 1; // interval between numbers, not 0
  const start = generateRandInt(interval); // starting point

  let sequenceElem = start;
  for (let i = 0; i < len; i += 1) {
    sequence.push(sequenceElem);
    sequenceElem += gap;
  }
  const missingElem = sequence[missingIdx];
  sequence.push(missingElem); // last elem of the arr is correct answer
  sequence[missingIdx] = '..';
  return sequence;
};

export default createSequence;
