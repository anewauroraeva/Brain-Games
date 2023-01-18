import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Find the greatest common divisor of given numbers.';

const generateGcdGame = () => {
  let firstNumber = getRandomValue(1, 100);
  let secondNumber = getRandomValue(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const neededAnswer = () => {
    while (firstNumber) {
      const neutralVar = firstNumber;
      firstNumber = secondNumber % firstNumber;
      secondNumber = neutralVar;
    }
    return secondNumber;
  };
  const rightAnswer = neededAnswer(firstNumber, secondNumber).toString();
  return [question, rightAnswer];
};

const runGcdGame = () => {
  gameLogic(rule, generateGcdGame);
};

export default runGcdGame;
