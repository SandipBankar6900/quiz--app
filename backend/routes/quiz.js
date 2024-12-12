const express = require("express");
const Quiz = require("../models/Quiz");
const Score = require("../models/Score");

const router = express.Router();

// Get quizzes
router.get("/", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Submit quiz and calculate score
router.post("/:id/submit", async (req, res) => {
  const { userId, answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);

  let score = 0;
  answers.forEach((answer, idx) => {
    if (quiz.questions[idx].correctAnswer === answer) score++;
  });

  await Score.create({ userId, quizId: req.params.id, score });
  res.json({ score });
});

// Get leaderboard (Admin Only)
router.get("/leaderboard", async (req, res) => {
  const leaderboard = await Score.find()
    .populate("userId", "username")
    .sort({ score: -1 })
    .limit(10);
  res.json(leaderboard);
});

module.exports = router;
