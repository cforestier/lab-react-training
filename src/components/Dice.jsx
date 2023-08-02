import { useState } from 'react';
const listOfDices = [
  'dice-empty',
  'dice1',
  'dice2',
  'dice3',
  'dice4',
  'dice5',
  'dice6',
];
const initialRandomNumber = Math.floor(Math.random() * 7);

function Dice() {
  const [randomNumber, setRandomNumber] = useState(initialRandomNumber);
  const getRandomInt = () => {
    setRandomNumber(Math.floor(Math.random() * 7));
  };

  const handleClickDice = () => {
    setRandomNumber(0);
    setTimeout(() => {
      getRandomInt();
    }, 1000);
  };
  return (
    <img
      onClick={handleClickDice}
      src={`./${listOfDices[randomNumber]}.png`}
      alt={listOfDices[randomNumber]}
    />
  );
}

export default Dice;
