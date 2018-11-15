import readlineSync from 'readline-sync';

const roundsCount = 3;
const minNumber = 1;
const maxNumber = 100;

const isEven = n => n % 2 === 0;
const rand = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

const correctAnswer = question => (isEven(question) ? 'yes' : 'no');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('Please, enter your name: ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if number even otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const question = rand(minNumber, maxNumber);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer(question)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. `
            + `Correct answer was '${correctAnswer(answer)}'.)`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
