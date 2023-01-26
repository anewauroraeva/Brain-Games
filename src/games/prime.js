import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (questionValue) => {
  if (questionValue <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(questionValue); i += 1) {
    if (questionValue % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGame = () => {
  const questionValue = getRandomValue(3, 100);
  const question = `${questionValue}`;
  const rightAnswer = (isPrime(questionValue) ? 'yes' : 'no');
  return [question, rightAnswer];
};

const runPrimeGame = () => {
  gameLogic(rule, generatePrimeGame);
};

export default runPrimeGame;
