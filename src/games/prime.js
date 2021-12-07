import { generateNumber } from '../utils.js';

/**
 * @type {string}
 */
export const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
  /**
   * @param {number} n
   * @returns {boolean}
   */
  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const randomNumber = generateNumber();
  const question = `Question: ${randomNumber}.`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};
