import generateRandInt from './generateRandInt.js';

/**
 * get numbers for the current task depending on the game title
 * @param {string} gameTitle name of the game
 * @returns {Array<number>}
 */
const getGameInputs = (gameTitle) => {
  const inputs = [];
  if (gameTitle === 'even') {
    inputs.push(generateRandInt());
  }
  return inputs;
};

export default getGameInputs;
