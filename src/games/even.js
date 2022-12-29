import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (questionValue) => questionValue % 2 === 0;

export const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const questionValue = getRandomValue(1, 50);
    console.log(`Question: ${questionValue}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const neededAnswer = (isEven(questionValue) === true ? 'yes' : 'no');
    if (playerAnswer === neededAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${neededAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
