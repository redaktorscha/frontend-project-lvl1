/**
 * game tasks (console messages) depending on game title
 * @typedef {Object} gameTasks
 * @property {function(Array): string)} even brain-even game
 */
const gameTasks = {
  even: (input) => `Question: ${input[0]}.`,
};

export default gameTasks;
