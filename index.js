import readlineSync from 'readline-sync';

const maxAttemptsCount = 3;

/**
 * @param {string} description
 * @param {function(): Array<string>} getGameData
 */
const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  let attemptsCount = 0;

  while (attemptsCount < maxAttemptsCount) {
    const [question, correctAnswer] = getGameData();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer :-( Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    attemptsCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
