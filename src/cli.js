import readlineSync from 'readline-sync';

const greeting = (userName) => {
  // eslint-disable-next-line no-param-reassign
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default greeting;
