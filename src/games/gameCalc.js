import generateRandInt from '../common/generateRandInt.js';

/**
 * @type {string}
 */
export const gameRule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

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
   * @param {string} op
   * @returns {number}
   */
  const calc = (a, b, op) => mathOperations[op](a, b);

  const opArr = Object.keys(operators);
  const len = opArr.length;
  const randomIndex = generateRandInt(len);
  const input = [];
  for (let i = 0; i < 2; i += 1) {
    input.push(generateRandInt());
  }
  input.push(opArr[randomIndex]);

  const answer = calc(...input).toString();
  const [num1, num2, opName] = input;
  const task = `Question: ${num1} ${operators[opName]} ${num2}.`;
  return [task, answer];
};
