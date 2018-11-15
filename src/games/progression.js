import { cons, car, cdr } from 'hexlet-pairs';
import randNumber from '../utils';
import runGame from '../runGame';

const description = 'What number is missing in the progression?';

const minStart = 0;
const maxStart = 50;

const minDifference = 1;
const maxDifference = 10;

const stepsCount = 10;

const minPosition = 1;
const maxPosition = 9;

const makeRound = () => {
  const start = randNumber(minStart, maxStart);
  const difference = randNumber(minDifference, maxDifference);
  const position = randNumber(minPosition, maxPosition);

  let question = '';

  for (let i = 0; i < stepsCount; i += 1) {
    question += (i === position) ? '.. ' : `${start + i * difference} `;
  }

  const answer = String(start + difference * position);

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export default () => runGame(description, makeRound, getQuestion, getAnswer);
