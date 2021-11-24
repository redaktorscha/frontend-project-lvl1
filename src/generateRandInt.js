/**
 * generates random integer
 * @param {number} [len=100] 0 <= x < len
 * @returns {number}
 */
const generateRandInt = (len = 100) => Math.floor(Math.random() * len);

export default generateRandInt;
