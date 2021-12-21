import generateNumber from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'Find the greatest common divisor of given numbers.';

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const num1 = generateNumber(1, 50);
  const num2 = generateNumber(1, 50);
  const answer = findGCD(num1, num2).toString();
  const question = `Question: ${num1} ${num2}.`;

  return [question, answer];
};
export default () => runGame(description, makeGameData);
