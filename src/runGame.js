import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log();

  const name = readlineSync.question('Please, enter your name: ');
  console.log(`Hello, ${name}!`);
  console.log();

  console.log(game.rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const round = game.makeRound();

    console.log(`Question: ${game.getQuestion(round)}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === game.getAnswer(round)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. `
            + `Correct answer was '${game.getAnswer(round)}'.)`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
