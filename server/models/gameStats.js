const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const gameStatsSchema = new mongoose.Schema({
  sentence: { type: String }, 
  correctCharacters: {type: Number}, 
  incorrectCharacters:{ type: Number},
  wpm: {type: Number}, 
  time: {type: Number}
});

// Create a model for our GameStats based on the schema
const GameStats = mongoose.model('GameStats', gameStatsSchema);

module.exports = GameStats;