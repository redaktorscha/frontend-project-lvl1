import generateNumber from '../utils.js';
import runGame from '../../index.js';

/**
 * @type {string}
 */
const description = 'What is the result of the expression?';

/**
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 * @returns {number}
 */
const calculate = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  return a * b;
};

/**
 * @returns {Array<string>}
 */
const makeGameData = () => {
  /**
   * @type {Array<string>}
   */
  const operators = ['+', '-', '*'];

  const { length } = operators;

  const index = generateNumber(0, length);
  const operator = operators[index];

  const num1 = generateNumber(1, 50);
  const num2 = generateNumber(1, 50);

  const answer = calculate(num1, num2, operator).toString();
  const question = `Question: ${num1} ${operator} ${num2}.`;
  return [question, answer];
};

export default () => runGame(description, makeGameData);
