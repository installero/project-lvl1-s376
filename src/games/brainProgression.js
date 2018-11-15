import { cons, car, cdr } from 'hexlet-pairs';
import { randNumber } from '../utils';
import runGame from '../runGame';
import { makeProgression, getNumberOnPosition, toString } from '../progression';

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
  const differnce = randNumber(minDifference, maxDifference);
  const position = randNumber(minPosition, maxPosition);

  const progression = makeProgression(start, differnce, stepsCount, position);

  const question = toString(progression);
  const answer = String(getNumberOnPosition(progression));

  return cons(question, answer);
};

const getQuestion = round => car(round);
const getAnswer = round => cdr(round);

export default () => runGame(description, makeRound, getQuestion, getAnswer);
