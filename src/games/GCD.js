import { generateNumber } from '../utils.js';

/**
 * @type {string}
 */
export const description = 'Find the greatest common divisor of given numbers.';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
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

  const randomData = [];

  for (let i = 0; i < 2; i += 1) {
    randomData.push(generateNumber());
  }

  const answer = findGCD(...randomData).toString();
  const [num1, num2] = randomData;
  const question = `Question: ${num1} ${num2}.`;

  return [question, answer];
};
