exports.getRandomNumbers = (start, end) => {
  const min = parseInt(start);
  const max = parseInt(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//We have a function that can accept a string as an argument and return an object containing the number of letters, number of symbols and number of numeric characters.

exports.characters = (str) => {
  const character = {
    letter: 0,
    symbol: 0,
    number: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      character.letter++;
    } else if (str[i].match(/[0-9]/)) {
      character.number++;
    } else {
      character.symbol++;
    }
  }
  return character;
};
