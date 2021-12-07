import { generateNumber } from '../utils.js';

/**
 * @type {string}
 */
export const description = 'What is the result of the expression?';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
  /**
   * @typedef {Object} mathOperations
   * @property {function(number, number): number} add
   * @property {function(number, number): number} substr
   * @property {function(number, number): number} mult
   */
  const mathOperations = {
    add: (a, b) => a + b,
    substr: (a, b) => a - b,
    mult: (a, b) => a * b,
  };

  /**
   * @typedef {Object} operators
   * @property {string} add
   * @property {string} substr
   * @property {string} mult
   */
  const operators = {
    add: '+',
    substr: '-',
    mult: '*',
  };

  /**
   * @param {number} a
   * @param {number} b
   * @param {string} operation
   * @param {mathOperations} math
   * @returns {number}
   */
  const calc = (a, b, operation, math) => math[operation](a, b);

  const operationsArr = Object.keys(mathOperations);
  const len = operationsArr.length;
  const randomIndex = generateNumber(len);

  const randomData = [];
  for (let i = 0; i < 2; i += 1) {
    randomData.push(generateNumber());
  }
  randomData.push(operationsArr[randomIndex]);

  const answer = calc(...randomData, mathOperations).toString();
  const [num1, num2, operationName] = randomData;
  const question = `Question: ${num1} ${operators[operationName]} ${num2}.`;
  return [question, answer];
};
