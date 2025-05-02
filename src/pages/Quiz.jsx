import React from 'react';
import QuizContainer from '../components/QuizContainer';
import { questions } from '../utils/questions';
import { useGoofyMode } from '../context/GoofyModeContext';
import '../styles/global.css';
import '../styles/goofy.css';

const Quiz = ({ answers, onAnswer, onComplete }) => {
  const { isGoofyMode } = useGoofyMode();

  return (
    <div className={`quiz-page animate-fadeIn ${isGoofyMode ? 'goofy-mode' : ''}`}>
      <h1 className="glow-text">Quiz PM Faluchard</h1>

      <div className="card gradient-border">
        <QuizContainer
          questions={questions}
          answers={answers}
          onAnswer={onAnswer}
          onComplete={onComplete}
        />
      </div>
    </div>
  );
};

export default Quiz;
