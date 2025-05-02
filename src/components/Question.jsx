import React from 'react';
import { useGoofyMode } from '../context/GoofyModeContext';
import '../styles/questions.css';
import '../styles/goofy.css';

const Question = ({ question, currentAnswer, onAnswer }) => {
  const { isGoofyMode } = useGoofyMode();

  const handleSelectAnswer = (answer) => {
    onAnswer(question.id, answer);
  };

  return (
    <div className={`question-container animate-fadeIn ${isGoofyMode ? 'goofy-mode' : ''}`}>
      <h3 className="question-title">
        <span className="question-number">{question.id}.</span> {question.text}
      </h3>
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <div
            key={index}
            className={`answer-option ${currentAnswer === answer.value ? 'selected' : ''}`}
            onClick={() => handleSelectAnswer(answer.value)}
          >
            <span className="answer-text">{answer.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
