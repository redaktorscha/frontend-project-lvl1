import readlineSync from 'readline-sync';

const maxAttempts = 3;

/**
 * @param {string} gameRule
 * @param {function(): Array<string>} getGameData
 */
const playGame = (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  let attemptCount = 0;

  while (attemptCount < maxAttempts) {
    const [currentTask, correctAnswer] = getGameData();

    console.log(currentTask);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      attemptCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer :-( Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
