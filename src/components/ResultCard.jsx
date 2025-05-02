import React from 'react';
import '../styles/results.css';
import Button from './Button';

const ResultCard = ({ result, onRestart }) => {
  if (!result) return null;

  return (
    <div className="result-card animate-fadeIn">
      <div className="result-icon">
        {result.icon}
      </div>
      <h2 className="result-title">{result.title}</h2>
      <p className="result-description">{result.description}</p>

      {result.characteristics && (
        <div className="result-characteristics">
          {result.characteristics.map((char, index) => (
            <div key={index} className="characteristic-item">
              <div className="characteristic-icon">{char.icon}</div>
              <div className="characteristic-text">{char.text}</div>
            </div>
          ))}
        </div>
      )}

      {result.stats && (
        <div className="stats-container">
          {result.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      <h2>Mais si tu t'appelles Eloïse Petrequin ou Luka Maret</h2>
      <h3>Ton profil de PM est "incroyable"</h3>
      <Button type="primary" size="lg" onClick={onRestart}>
        Recommencer le quiz
      </Button>
    </div>
  );
};

export default ResultCard;
