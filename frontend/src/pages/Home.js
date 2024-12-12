import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('/api/quizzes').then((response) => setQuizzes(response.data));
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>
      {quizzes.map((quiz) => (
        <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
          <div>{quiz.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;