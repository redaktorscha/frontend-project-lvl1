import { generateNumber } from '../utils.js';

/**
 * @type {string}
 */
export const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
  /**
   * @param {number} num
   * @returns {boolean}
   */
  const isEven = (num) => num % 2 === 0;

  const randomNumber = generateNumber();
  const question = `Question: ${randomNumber}.`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};
