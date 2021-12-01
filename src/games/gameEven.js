import generateRandInt from '../common/generateRandInt.js';

/**
 * @type {string}
 */
export const gameRule = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

/**
 * @returns {Array<string>}
 */
export const makeGameData = () => {
  /**
   * @param {number} num
   * @returns {boolean}
   */
  const isEven = (num) => num % 2 === 0;

  const input = generateRandInt();
  const task = `Question: ${input}.`;
  const answer = isEven(input) ? 'yes' : 'no';
  return [task, answer];
};
