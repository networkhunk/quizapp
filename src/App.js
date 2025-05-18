import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import './App.css';

function App() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await API.get('quizApi', '/quizzes');
        setQuizzes(data);
      } catch (error) {
        console.error('Error fetching quizzes', error);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <div className="quiz-list">
        {quizzes.length > 0 ? (
          quizzes.map((quiz, index) => (
            <div key={index} className="quiz-item">
              <h2>{quiz.title}</h2>
              <p>{quiz.description}</p>
            </div>
          ))
        ) : (
          <p>No quizzes available</p>
        )}
      </div>
    </div>
  );
}

export default App;
