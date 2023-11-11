const GameStats = require('../models/gameStats');

// Controller for our GET request
// Fetches all games from the database
const getGame = async (req, res) => {

    const gameStats = await GameStats.find();
    res.status(200).json(gameStats);
}

// Controller for our POST request
// Creates a new game in the database
const postGame = async (req, res) => {

    const { game } = req.body;
    const { sentence, correctCharacters, incorrectCharacters, wpm, time } = game;

    // Creates a new game in the database
    const newGame = await GameStats.create(req.body);

    res.status(200).json(newGame);
}



module.exports = { getGame, postGame };
