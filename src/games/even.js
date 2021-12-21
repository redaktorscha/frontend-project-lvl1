import generateNumber from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

/**
 * @param {number} num
 * @returns {boolean}
 */
const isEven = (num) => num % 2 === 0;

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const num = generateNumber(1, 100);
  const question = `Question: ${num}.`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, makeGameData);
