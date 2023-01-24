import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return getRightAnswer(secondNumber, firstNumber % secondNumber);
};

const generateGcdGame = () => {
  const firstNumber = getRandomValue(1, 100);
  const secondNumber = getRandomValue(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getRightAnswer(firstNumber, secondNumber).toString();
  return [question, rightAnswer];
};

const runGcdGame = () => {
  gameLogic(rule, generateGcdGame);
};

export default runGcdGame;
