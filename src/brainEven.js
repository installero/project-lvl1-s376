import readlineSync from 'readline-sync';

const roundsCount = 3;

const isEven = n => n % 2 === 0;
const rand = n => Math.floor(Math.random() * n);
const invertedAnswer = answer => (answer === 'yes' ? 'no' : 'yes');
const checkAnswer = (answer, n) => (answer === 'yes' && isEven(n))
  || (answer === 'no' && !isEven(n));

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('Please, enter your name: ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if number even otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const n = rand(100);

    console.log(`Question: ${n}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== 'yes' && answer !== 'no') {
      console.log('Read the rules, please!');
      break;
    }

    if (checkAnswer(answer, n)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. `
            + `Correct answer was '${invertedAnswer(answer)}'.)`);
      break;
    }

    if (i === roundsCount - 1) { console.log(`Congratulations, ${name}!`); }
  }
};

export default brainEven;
