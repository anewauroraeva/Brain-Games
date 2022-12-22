import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

greeting();

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${getRandomValue(0, 25)}`);
    const answer = readlineSync.question('Your answer: ');
    const oppositeAnswer = (answer === 'yes' ? 'no' : 'yes');
    const evenNumber = (getRandomValue % 2 === 0) && (answer === 'yes');
    const oddNumber = (getRandomValue % 2 !== 0) && (answer === 'no');
    if (evenNumber || oddNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

evenGame();

export default evenGame;
