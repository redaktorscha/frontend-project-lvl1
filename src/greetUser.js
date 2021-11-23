import readlineSync from 'readline-sync';

/**
 * greet user and get username if needed
 * @param {boolean} [needUserName=false] needUserName
 * @returns {string}
 */
const greetUser = (needUserName = false) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (needUserName) {
    return userName;
  }
  return '';
};

export default greetUser;
