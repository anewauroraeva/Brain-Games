import gameLogic from '../index.js';
import getRandomValue from '../getRandomValue.js';

const rule = 'What number is missing in the progression?';

const getProgressionArray = (startNum, stepOfProgression, lengthOfProgression) => {
  const progressionArray = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const nextNum = startNum + i * stepOfProgression;
    progressionArray.push(nextNum);
  }
  return progressionArray;
};

const generateProgressionGame = () => {
  const startNum = getRandomValue(1, 200);
  const stepOfProgression = getRandomValue(3, 10);
  const lengthOfProgression = getRandomValue(6, 11);
  const progression = getProgressionArray(startNum, stepOfProgression, lengthOfProgression);
  const randomIndex = getRandomValue(0, lengthOfProgression - 1);
  const neededAnswer = progression[randomIndex];
  const rightAnswer = neededAnswer.toString();
  progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const runProgressionGame = () => {
  gameLogic(rule, generateProgressionGame);
};

export default runProgressionGame;
