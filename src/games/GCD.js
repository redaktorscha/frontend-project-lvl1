import { generateNumber, findGCD } from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'Find the greatest common divisor of given numbers.';

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const randomNum1 = generateNumber(1, 100);
  const randomNum2 = generateNumber(1, 100);
  const answer = findGCD(randomNum1, randomNum2).toString();
  const question = `Question: ${randomNum1} ${randomNum2}.`;

  return [question, answer];
};

export default () => runGame(description, makeGameData);
