/**
 * game rules (console messages) depending on game title
 * @typedef {Object} gameRules
 * @property {string} even brain-even game
 * @property {string} calc brain-calc game
 * @property {string} gcd brain-gcd game
 * @property {string} prime brain-prime game
 * @property {string} progression brain-progression game
 */
const gameRules = {
  even: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  prime: 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.',
  progression: 'What number is missing in this progression?',
};

export default gameRules;
