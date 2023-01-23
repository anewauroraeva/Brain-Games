import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'What is the result of the expression?';

const getRightAnswer = (firstOperand, randomOperator, secondOperand) => {
  switch (randomOperator) {
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

const generateCalcGame = () => {
  const firstOperand = getRandomValue(1, 25);
  const secondOperand = getRandomValue(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const rightAnswer = getRightAnswer(firstOperand, randomOperator, secondOperand).toString();
  return [question, rightAnswer];
};

const runCalcGame = () => {
  gameLogic(rule, generateCalcGame);
};

export default runCalcGame;
