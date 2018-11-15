import { cons, car, cdr } from 'hexlet-pairs';

const makeProgression = (start, difference, count, position) => {
  return cons(cons(start, difference), cons(count, position));
};

const getStart = prog => car(car(prog));
const getDifference = prog => cdr(car(prog));
const getCount = prog => car(cdr(prog));
const getPosition = prog => cdr(cdr(prog));

const getNumberOnPosition = prog => getStart(prog)
  + getDifference(prog) * getPosition(prog);

const toString = (prog) => {
  let result = '';

  for (let i = 0; i < getCount(prog); i += 1) {
    if (i === getPosition(prog)) {
      result += '.. ';
    } else {
      result += `${getStart(prog) + i * getDifference(prog)} `;
    }
  }

  return result;
};

export { makeProgression, getNumberOnPosition, toString };
