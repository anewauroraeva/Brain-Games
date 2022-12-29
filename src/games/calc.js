import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

console.log('What is the result of the expression?');

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operatorsArray = ['+', '-', '*'];

export const calcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandomValue(1, 25);
    const secondOperand = getRandomValue(1, 5);
    const getRandomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
    console.log(`Question: ${firstOperand} ${getRandomOperator} ${secondOperand}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const neededAnswer = () => {
      switch (getRandomOperator) {
        case '+':
          return firstOperand + secondOperand;
        case '-':
          return firstOperand - secondOperand;
        case '*':
          return firstOperand * secondOperand;
        default:
          return "there's an error";
      }
    };
    const comparableAnswer = neededAnswer().toString();
    if (playerAnswer === comparableAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${comparableAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
