import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('Please, enter your name: ');

  console.log(`Hello, ${name}!`);
}

export default brainGames;
