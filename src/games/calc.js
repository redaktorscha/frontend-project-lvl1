import { generateNumber, calculate } from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'What is the result of the expression?';

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  /**
   * @type {Array<string>}
   */
  const operators = ['+', '-', '*'];

  const { length } = operators;

  const randomIndex = generateNumber(0, length);
  const randomOperator = operators[randomIndex];

  const randomNum1 = generateNumber(1, 100);
  const randomNum2 = generateNumber(1, 100);

  const answer = calculate(randomNum1, randomNum2, randomOperator).toString();
  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}.`;
  return [question, answer];
};

export default () => runGame(description, makeGameData);
