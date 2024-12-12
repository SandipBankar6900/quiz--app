const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  quizId: mongoose.Schema.Types.ObjectId,
  score: Number,
});

module.exports = mongoose.model("Score", ScoreSchema);
