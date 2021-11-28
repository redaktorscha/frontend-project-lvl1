import mathOperations from './mathOperations.js';

/**
 * simple calculator: add, substract, multiply
 * @param {number} a
 * @param {number} b
 * @param {string} op
 */
const calc = (a, b, op) => mathOperations[op](a, b);

export default calc;
