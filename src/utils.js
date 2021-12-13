/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

/**
 * @param {number} a
 * @param {number} b
 * @param {string} operator
 * @returns {number}
 */
export const calculate = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  return a * b;
};

/**
 * @param {number} sequenceLength
 * @param {number} interval
 * @returns {Array<number|string>}
 */
export const createSequence = (sequenceLength, interval) => {
  const sequence = [];
  const missingIndex = generateNumber(0, sequenceLength);
  const gap = generateNumber(1, interval);
  const start = generateNumber(0, interval);

  let sequenceElem = start;
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(sequenceElem);
    sequenceElem += gap;
  }
  const missingElem = sequence[missingIndex];
  sequence.push(missingElem);
  sequence[missingIndex] = '..';
  return sequence;
};

/**
 * @param {number} n
 * @returns {boolean}
 */
export const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

/**
 * @param {number} num
 * @returns {boolean}
 */
export const isEven = (num) => num % 2 === 0;
