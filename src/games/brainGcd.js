import { cons, car, cdr } from 'hexlet-pairs';

const rules = 'Find the greatest common divisor of given numbers.';

const minNumber = 1;
const maxNumber = 100;

const randNumber = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

const findGcd = (n, m) => {
  const max = n > m ? n : m;

  for (let i = Math.floor(max / 2); i > 1; i -= 1) {
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
  const answer = String(findGcd(number1, number2));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export {
  rules, makeRound, getQuestion, getAnswer,
};
