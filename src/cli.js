import readlineSync from 'readline-sync';
/**
 * ask user name and greet
 */
const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
}

export default greetUser;