import generateRandInt from './generateRandInt.js';
import operators from './math/operators.js';
import createSequence from './math/createSequence.js';
/**
 * get numbers for the current task depending on the game title
 * @param {string} gameTitle name of the game
 * @returns {Array<number>}
 */
const getGameInputs = (gameTitle) => {
  const inputs = [];
  if (gameTitle === 'even' || gameTitle === 'prime') { // 1 random int
    inputs.push(generateRandInt());
  } else if (gameTitle === 'gcd' || gameTitle === 'calc') { // 2 rand ints
    for (let i = 0; i < 2; i += 1) {
      inputs.push(generateRandInt());
    }
    if (gameTitle === 'calc') { // + math op
      const opArr = Object.keys(operators);
      const len = opArr.length;
      const randomIdx = generateRandInt(len);
      inputs.push(opArr[randomIdx]); // 'add', 'substr' or 'mult'
    }
  } else { // progression
    const seqLen = 10; // could be any
    const range = 10; // why not
    inputs.push(...createSequence(seqLen, range));
  }
  return inputs;
};

export default getGameInputs;
