import generateNumber from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'What number is missing in this progression?';

/**
 * @param {number} length
 * @param {number} interval
 * @returns {Array<number>}
 */
const createSequence = (length, interval) => {
  const sequence = [];

  const gap = generateNumber(1, interval);
  const start = generateNumber(0, interval);

  let elem = start;
  for (let i = 0; i < length; i += 1) {
    sequence.push(elem);
    elem += gap;
  }

  return sequence;
};

/**
 *
 * @param {Array<number>} arr
 * @param {number} index
 * @returns {Array<number|string>}
 */
const getQuestion = (arr, index) => arr.map((el, i) => {
  if (i === index) {
    return '..';
  }
  return el;
});

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const sequenceLength = 10;
  const range = 10;

  const sequence = createSequence(sequenceLength, range);
  const index = generateNumber(0, sequenceLength);

  const answer = sequence[index].toString();
  const question = `Question: ${getQuestion(sequence, index).join(' ')}.`;
  return [question, answer];
};

export default () => runGame(description, makeGameData);
