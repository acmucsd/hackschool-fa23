const getGame = async (req, res) => {

    const game = {
            sentence: 'Hello there!',
            correctCharacters: 12,
            incorrectCharacters: 0,
            wpm: 100,
            time: 13.33
        }

    res.status(200).json(game);
}

const postGame = async (req, res) => {

    const { game } = req.body;
    const { sentence, correctCharacters, incorrectCharacters, wpm, time } = game;

    if (!sentence || !correctCharacters || !incorrectCharacters || !wpm || !time) {
        res.status(400).json({ error: 'Invalid request' });
    }
    const sentenceLength = sentence.length;
    if (sentenceLength !== correctCharacters + incorrectCharacters) {
        res.status(400).json({ error: 'Sentence length does not match' });
    }
    else {
        res.status(200).json({ game })
    }
}



module.exports = { getGame, postGame };
