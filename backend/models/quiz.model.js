const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      text: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);
