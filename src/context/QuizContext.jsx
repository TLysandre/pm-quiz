import React, { createContext, useState } from 'react';
import { quizQuestions, calculateProfile } from '../data/quizData';

// Création du contexte
const QuizContext = createContext();

// Provider du contexte
export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userName, setUserName] = useState('');
  const [userFaculty, setUserFaculty] = useState('');

  // Fonction pour commencer le quiz
  const startQuiz = (name, faculty) => {
    setUserName(name);
    setUserFaculty(faculty);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setQuizFinished(false);
  };

  // Fonction pour répondre à une question
  const answerQuestion = (questionId, selectedOptionId) => {
    // Ajouter la réponse
    setAnswers(prev => [...prev, { questionId, selectedOptionId }]);
    
    // Passer à la question suivante ou terminer le quiz
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  // Fonction pour terminer le quiz et calculer les résultats
  const finishQuiz = () => {
    const calculatedResult = calculateProfile(answers);
    setResult(calculatedResult);
    setQuizFinished(true);
  };

  // Fonction pour recommencer le quiz
  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  // Valeur du contexte
  const value = {
    currentQuestion: quizQuestions[currentQuestionIndex],
    currentQuestionIndex,
    totalQuestions: quizQuestions.length,
    answers,
    result,
    quizStarted,
    quizFinished,
    userName,
    userFaculty,
    startQuiz,
    answerQuestion,
    finishQuiz,
    restartQuiz
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};