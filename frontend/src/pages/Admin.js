import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('/api/quizzes/leaderboard').then((response) => setLeaderboard(response.data));
    axios.get('/api/scores').then((response) => setScores(response.data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry.username}: {entry.score}</li>
        ))}
      </ul>
      <h2>All User Scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>User {score.userId}: {score.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

