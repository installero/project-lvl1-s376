import { cons, car, cdr } from 'hexlet-pairs';
import { isEven, randNumber } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const makeRound = () => {
  const question = randNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  description, makeRound, getQuestion, getAnswer,
};
