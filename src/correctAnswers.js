import isEven from './math/isEven.js';
import calc from './math/calc.js';
import findGCD from './math/findGCD.js';
import isPrime from './math/isPrime.js';
import getMissingSeqElem from './math/getMissingSeqElem.js';

/**
 * correct answers for current task
 * @typedef {Object} correctAnswers
 * @property {string} even correct answer for brain-even game
 * @property {string} calc correct answer for brain-calc game
 * @property {string} gcd correct answer for brain-gcd game
 * @property {string} prime correct answer for brain-prime game
 * @property {string} progression correct answer for brain-progression game
 */
const correctAnswers = {
  even: (input) => (isEven(input) ? 'yes' : 'no'),
  calc: (input) => calc(input[0], input[1], input[2]).toString(), // input be like [1,2,'mult']
  gcd: (input) => findGCD(input[0], input[1]).toString(),
  prime: (input) => (isPrime(input[0]) ? 'yes' : 'no'),
  progression: (input) => getMissingSeqElem(input).toString(),
};

export default correctAnswers;
