import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (questionValue) => questionValue % 2 === 0;

const evenGame = () => {
  const questionValue = getRandomValue(1, 50);
  const question = `${questionValue}`;
  const rightAnswer = (isEven(questionValue) === true ? 'yes' : 'no');
  return [question, rightAnswer];
};

const runEvenGame = () => {
  gameLogic(rule, evenGame);
};

export default runEvenGame;
