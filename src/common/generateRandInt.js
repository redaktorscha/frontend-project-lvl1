/**
 * @param {number} [len=100]
 * @returns {number}
 */
const generateRandInt = (len = 100) => Math.floor(Math.random() * len);

export default generateRandInt;
