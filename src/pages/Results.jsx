import React from 'react';
import ResultCard from '../components/ResultCard';
import { resultProfiles } from '../utils/results';
import { useGoofyMode } from '../context/GoofyModeContext';
import '../styles/results.css';
import '../styles/goofy.css';

const Results = ({ result, onRestart }) => {
  const { isGoofyMode } = useGoofyMode();
  const resultData = resultProfiles[result] || resultProfiles.default;

  return (
    <div className={`results-page animate-fadeIn ${isGoofyMode ? 'goofy-mode' : ''}`}>
      <h1 className="glow-text">Ton Profil de PM</h1>

      <ResultCard
        result={resultData}
        onRestart={onRestart}
      />
    </div>
  );
};

export default Results;
