import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (questionValue) => questionValue % 2 === 0;

const generateEvenGame = () => {
  const questionValue = getRandomValue(1, 100);
  const question = `${questionValue}`;
  const rightAnswer = (isEven(questionValue) ? 'yes' : 'no');
  return [question, rightAnswer];
};

const runEvenGame = () => {
  gameLogic(rule, generateEvenGame);
};

export default runEvenGame;
