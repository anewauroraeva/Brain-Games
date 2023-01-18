import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'What is the result of the expression?';

const generateCalcGame = () => {
  const firstOperand = getRandomValue(1, 25);
  const secondOperand = getRandomValue(1, 10);
  const operatorsArray = ['+', '-', '*'];
  const getRandomOperator = operatorsArray[Math.floor(Math.random() * operatorsArray.length)];
  const question = `${firstOperand} ${getRandomOperator} ${secondOperand}`;
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
  const rightAnswer = neededAnswer(firstOperand, getRandomOperator, secondOperand).toString();
  return [question, rightAnswer];
};

const runCalcGame = () => {
  gameLogic(rule, generateCalcGame);
};

export default runCalcGame;
