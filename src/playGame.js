import readlineSync from 'readline-sync';
import greetUser from './greetUser.js';

/**
 * play game depending on game type and max attempts number
 * @param {string} gameType
 * @param {number} maxAttempts
 */
const playGame = (gameType, maxAttempts) => {
  const userName = greetUser(true);

  let attemptCnt = 0;
  let gameRule = '';

  if (gameType === 'even') {
    gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
    console.log(gameRule);

    while (attemptCnt < maxAttempts) {
      const input = Math.floor(Math.random() * 100);
      console.log(`Question: ${input}`);
      const correctAnswer = input % 2 === 0 ? 'yes' : 'no';
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        attemptCnt += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer :-( Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
