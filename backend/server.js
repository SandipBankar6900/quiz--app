const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const quizRoutes = require("./routes/quiz");


mongoose.connect("mongodb://localhost:27017/quizapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);




app.listen(5000, () => console.log("Server running on port 5000"));
