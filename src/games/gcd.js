import { cons, car, cdr } from 'hexlet-pairs';
import randNumber from '../utils';
import runGame from '../runGame';

const description = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const gcd = (n, m) => {
  if (n === m) {
    return n;
  }

  const boundary = Math.floor(Math.max(n, m) / 2);

  for (let i = boundary; i > 1; i -= 1) {
    if (n % i === 0 && m % i === 0) {
      return i;
    }
  }

  return 1;
};

const makeRound = () => {
  const number1 = randNumber(minNumber, maxNumber);
  const number2 = randNumber(minNumber, maxNumber);

  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export default () => runGame(description, makeRound, getQuestion, getAnswer);
