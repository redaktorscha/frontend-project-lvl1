import readlineSync from 'readline-sync';
import greetUser from './greetUser.js';
import gameRules from './gameRules.js';
import makeGameData from './makeGameData.js';

/**
 * play game depending on game type and max attempts number
 * @param {string} gameType
 * @param {number} maxAttempts
 */
const playGame = (gameType, maxAttempts) => {
  const userName = greetUser(true); // get user name

  let attemptCnt = 0;
  const gameRule = gameRules[gameType]; // get console msg - rule of the current game
  console.log(gameRule);

  while (attemptCnt < maxAttempts) {
    // const input = Math.floor(Math.random() * 100); // const [q, corAns]=getGameData(gameType)
    const [currentTask, correctAnswer] = makeGameData(gameType);
    // console.log(`Question: ${input}`);
    console.log(currentTask);
    // const correctAnswer = input % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: '); // get user console input
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      attemptCnt += 1;
    } else {
      // game over, user loses
      console.log(`'${userAnswer}' is wrong answer :-( Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  // user wins
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
