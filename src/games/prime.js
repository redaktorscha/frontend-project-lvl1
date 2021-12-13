import { generateNumber, isPrime } from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  const randomNumber = generateNumber(1, 100);
  const question = `Question: ${randomNumber}.`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, makeGameData);
