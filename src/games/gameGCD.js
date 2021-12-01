import generateRandInt from '../common/generateRandInt.js';

/**
 * @type {string}
 */
export const gameRule = 'Find the greatest common divisor of given numbers.';

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

  const input = [];
  for (let i = 0; i < 2; i += 1) {
    input.push(generateRandInt());
  }
  const answer = findGCD(...input).toString();
  const [num1, num2] = input;
  const task = `Question: ${num1} ${num2}.`;
  return [task, answer];
};
