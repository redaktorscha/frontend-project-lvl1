import operators from './math/operators.js';
/**
 * game tasks (console messages) depending on game title
 * @typedef {Object} gameTasks
 * @property {function(Array): string)} even brain-even game
 * @property {function(Array): string)} calc brain-calc game
 * @property {function(Array): string)} gcd brain-gcd game
 * @property {function(Array): string)} prime brain-prime game
 * @property {function(Array): string)} progression brain-progression game
 */
const gameTasks = {
  even: (input) => `Question: ${input[0]}.`,
  calc: (input) => `Question: ${input[0]} ${operators[input[2]]} ${input[1]}.`,
  gcd: (input) => `Question: ${input[0]} ${input[1]}.`,
  prime: (input) => `Question: ${input[0]}.`,
  progression: (input) => `Question: ${input.slice(0, -1).join(' ')}.`,
};

export default gameTasks;
