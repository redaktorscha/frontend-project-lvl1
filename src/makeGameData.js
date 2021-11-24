import correctAnswers from './correctAnswers.js';
import getGameInputs from './getGameInputs.js';
import gameTasks from './gameTasks.js';

/**
 * get current task and correct answer for console msgs
 * @param {string} gameTitle name of the game
 * @returns {Array<string>} current task and correct answer
 */
const makeGameData = (gameTitle) => {
  const input = getGameInputs(gameTitle);
  const answer = correctAnswers[gameTitle](input);
  const task = gameTasks[gameTitle](input);
  return [task, answer];
};

export default makeGameData;
