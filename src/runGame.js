import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, makeRound, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log();

  const name = readlineSync.question('Please, enter your name: ');
  console.log(`Hello, ${name}!`);
  console.log();

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const round = makeRound();

    console.log(`Question: ${getQuestion(round)}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === getAnswer(round)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. `
        + `Correct answer was '${getAnswer(round)}'.)`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
