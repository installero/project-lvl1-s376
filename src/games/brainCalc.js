import { cons, car, cdr } from 'hexlet-pairs';
import { randNumber } from '../utils';

const description = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const makeOperation = (symbol, fun) => cons(symbol, fun);
const getSymbol = operation => car(operation);
const getFun = operation => cdr(operation);

const randOperation = () => {
  switch (randNumber(0, 2)) {
    case 0: {
      return makeOperation('+', (a, b) => a + b);
    }
    case 1: {
      return makeOperation('-', (a, b) => a - b);
    }
    case 2: {
      return makeOperation('*', (a, b) => a * b);
    }
    default: {
      return null;
    }
  }
};

const makeRound = () => {
  const argument1 = randNumber(minNumber, maxNumber);
  const argument2 = randNumber(minNumber, maxNumber);
  const operation = randOperation();

  const question = `${argument1} ${getSymbol(operation)} ${argument2}`;
  const answer = String(getFun(operation)(argument1, argument2));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  description, makeRound, getQuestion, getAnswer,
};
