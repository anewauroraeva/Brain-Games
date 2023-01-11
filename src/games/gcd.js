import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  let firstNumber = getRandomValue(1, 100);
  let secondNumber = getRandomValue(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const neededAnswer = () => {
    if (firstNumber > secondNumber) {
      if (firstNumber % secondNumber === 0) {
        return secondNumber;
      }
      while (firstNumber) {
        const neutralVar = firstNumber;
        firstNumber = secondNumber % firstNumber;
        secondNumber = neutralVar;
      }
      return secondNumber;
    }
    if (secondNumber % firstNumber === 0) {
      return firstNumber;
    }
    while (secondNumber) {
      const neutralVar = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = neutralVar;
    }
    return firstNumber;
  };
  const rightAnswer = neededAnswer(firstNumber, secondNumber).toString();
  return [question, rightAnswer];
};

const runGcdGame = () => {
  gameLogic(rule, gcdGame);
};

export default runGcdGame;
