import { cons, car, cdr } from 'hexlet-pairs';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const minNumber = 1;
const maxNumber = 100;

const isEven = n => n % 2 === 0;
const rand = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

const makeRound = () => {
  const question = rand(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  rules, makeRound, getQuestion, getAnswer,
};
