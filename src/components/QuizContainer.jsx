import React, { useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Button from './Button';
import '../styles/questions.css';

const QuizContainer = ({ questions, answers, onAnswer, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const result = calculateResult(answers, questions);
      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = (answers, questions) => {
    // Compteurs pour chaque type de PM
    let counts = {
      festif: 0,
      mentor: 0,
      traditionnel: 0,
      protecteur: 0,
      academique: 0
    };
    
    // Parcourir toutes les réponses
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer && question.scoring) {
        // Ajouter les points correspondants
        for (const type in question.scoring[answer]) {
          counts[type] += question.scoring[answer][type];
        }
      }
    });
    
    // Trouver le type avec le score le plus élevé
    let maxType = 'festif';
    let maxScore = counts.festif;
    
    for (const type in counts) {
      if (counts[type] > maxScore) {
        maxScore = counts[type];
        maxType = type;
      }
    }
    
    return maxType;
  };

  const canContinue = answers[questions[currentQuestion].id] !== undefined;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="question-count">
          Question {currentQuestion + 1}/{questions.length}
        </div>
      </div>
      
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      
      <Question
        question={questions[currentQuestion]}
        currentAnswer={answers[questions[currentQuestion].id]}
        onAnswer={onAnswer}
      />
      
      <div className="navigation-buttons">
        <Button 
          type="secondary" 
          onClick={handlePrevious} 
          disabled={currentQuestion === 0}
        >
          Précédent
        </Button>
        
        <Button 
          type="primary" 
          onClick={handleNext} 
          disabled={!canContinue}
        >
          {currentQuestion < questions.length - 1 ? 'Suivant' : 'Voir mon résultat'}
        </Button>
      </div>
    </div>
  );
};

export default QuizContainer;