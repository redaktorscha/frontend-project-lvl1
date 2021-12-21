import generateNumber from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const num = generateNumber(1, 100);
  const question = `Question: ${num}.`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, makeGameData);
