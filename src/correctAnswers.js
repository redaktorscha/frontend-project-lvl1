/**
 * correct answers for current task
 * @typedef {Object} correctAnswers
 * @property {string} even correct answer for brain-even game
 */
const correctAnswers = {
  even: (input) => (input[0] % 2 === 0 ? 'yes' : 'no'),
};

export default correctAnswers;
