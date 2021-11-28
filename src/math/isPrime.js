/**
 * returns true if the number is prime, false if not
 * @param {number} n
 * @returns {boolean}
 */
const isPrime = (n) => {
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

export default isPrime;
