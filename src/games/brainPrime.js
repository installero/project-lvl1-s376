import { cons, car, cdr } from 'hexlet-pairs';
import { isPrime, randNumber } from '../utils';
import runGame from '../runGame';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumber = 1;
const maxNumber = 1000;

const makeRound = () => {
  const question = randNumber(minNumber, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export default () => runGame(description, makeRound, getQuestion, getAnswer);
