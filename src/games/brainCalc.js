import { cons, car, cdr } from 'hexlet-pairs';

const rules = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 100;

const randNumber = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

const randOperation = () => {
  switch (randNumber(0, 2)) {
    case 0: {
      return '+';
    }
    case 1: {
      return '-';
    }
    case 2: {
      return '*';
    }
    default: {
      return null;
    }
  }
};

const correctAnswer = (argument1, argument2, operation) => {
  switch (operation) {
    case '+': {
      return argument1 + argument2;
    }
    case '-': {
      return argument1 - argument2;
    }
    case '*': {
      return argument1 * argument2;
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

  const question = `${argument1} ${operation} ${argument2}`;
  const answer = String(correctAnswer(argument1, argument2, operation));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  rules, makeRound, getQuestion, getAnswer,
};
