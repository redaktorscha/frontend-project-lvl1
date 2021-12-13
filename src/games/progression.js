import { createSequence } from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'What number is missing in this progression?';

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const sequenceLength = 10;
  const range = 10;
  const randomSequence = createSequence(sequenceLength, range);

  const answer = randomSequence.slice(-1).toString();
  const question = `Question: ${randomSequence.slice(0, -1).join(' ')}.`;
  return [question, answer];
};

export default () => runGame(description, makeGameData);
