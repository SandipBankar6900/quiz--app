import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Summary from './pages/Summary';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ThemeProvider from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;