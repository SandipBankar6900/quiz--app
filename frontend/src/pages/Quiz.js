import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    axios.get(`/api/quiz/${id}`).then((response) => setQuestions(response.data.questions));
  }, [id]);

  const handleAnswer = (selected) => {
    const isCorrect = questions[currentIndex].correctAnswer === selected;
    if (isCorrect) setScore((prev) => prev + 1);
    setAnswer(isCorrect);
  };

  const nextQuestion = () => {
    setAnswer(null);
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= questions.length) {
    return <div>Your final score: {score}</div>;
  }

  const question = questions[currentIndex];

  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
      {answer !== null && (
        <div>
          {answer ? 'Correct!' : 'Incorrect!'}
          <button onClick={nextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;