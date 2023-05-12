const { getRandomNumbers, characters } = require('./src/businessLogic');
//const characters = require('./src/businessLogic');

exports.randNum = (req, res) => {
  const { start, end } = req.query;
  const numbers = getRandomNumbers(start, end);
  res.status(200).json({ number: numbers });
};

exports.charactersControllers = (req, res) => {
  const { str } = req.query;
  const character = characters(str);
  res.status(200).json({ character, str });
};
