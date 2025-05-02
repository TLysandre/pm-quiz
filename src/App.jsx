import { useState } from 'react';
import { GoofyModeProvider, useGoofyMode } from './context/GoofyModeContext';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Background from './components/Background';
import './styles/global.css';

function App() {
  const [page, setPage] = useState('home');
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const navigateTo = (pageName) => {
    setPage(pageName);
  };

  const handleAnswers = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleResults = (resultType) => {
    setResult(resultType);
    navigateTo('results');
  };

  return (
    <GoofyModeProvider>
      <AppContent
        page={page}
        navigateTo={navigateTo}
        answers={answers}
        handleAnswers={handleAnswers}
        handleResults={handleResults}
        result={result}
        setAnswers={setAnswers}
        setResult={setResult}
      />
    </GoofyModeProvider>
  );
}

const AppContent = ({ page, navigateTo, answers, handleAnswers, handleResults, result, setAnswers, setResult }) => {
  const { isGoofyMode, toggleGoofyMode } = useGoofyMode();

  return (
    <div className="app-container">
      <button className="toggle-button" onClick={toggleGoofyMode}>
        {isGoofyMode ? 'Mode Normal' : 'Mode A l\'arrache'}
      </button>
      <Background />
      <div className="content">
        {page === 'home' && <Home onStart={() => navigateTo('quiz')} />}
        {page === 'quiz' && (
          <Quiz
            answers={answers}
            onAnswer={handleAnswers}
            onComplete={handleResults}
          />
        )}
        {page === 'results' && (
          <Results
            result={result}
            onRestart={() => {
              setAnswers({});
              setResult(null);
              navigateTo('home');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
