import { cons, car, cdr } from 'hexlet-pairs';
import { randNumber, gcd } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const makeRound = () => {
  const number1 = randNumber(minNumber, maxNumber);
  const number2 = randNumber(minNumber, maxNumber);

  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  description, makeRound, getQuestion, getAnswer,
};
