import React from 'react';
import Button from '../components/Button';
import { useGoofyMode } from '../context/GoofyModeContext';
import '../styles/global.css';
import '../styles/goofy.css';

const Home = ({ onStart }) => {
  const { isGoofyMode } = useGoofyMode();

  return (
    <div className={`home-container animate-fadeIn ${isGoofyMode ? 'goofy-mode' : ''}`}>
      <h1 className="glow-text">Découvre quel genre de PM tu es !</h1>

      <div className="card gradient-border text-center">
        <p className="mb-4">
          Ce quiz te permettra de découvrir ton profil de parrain ou marraine.
        </p>

        <p className="mb-4">
          Réponds honnêtement aux questions et découvre ton résultat à la fin du quiz.
        </p>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Button type="primary" size="lg" onClick={onStart}>
            Commencer le quiz
          </Button>
        </div>
      </div>

      <div className="features-grid text-center">
        <div className="feature animate-fadeIn delay-100 mb-1">
          <h3>5 profils différents</h3>
          <p>Découvre parmi les 5 profils lequel te correspond le mieux</p>
        </div>

        <div className="feature animate-fadeIn delay-200 mb-1 mt-2">
          <h3>Questions en tout genre</h3>
          <p>Des questions ciblées pour déterminer précisément ton style</p>
        </div>

        <div className="feature animate-fadeIn delay-300 mb-1 mt-2">
          <h3>Résultats scientifiquement prouvés</h3>
          <p>Une analyse complète de ton profil de parrain/marraine basée sur des calculs faits par des gens intelligents qui viennent du MIT ou une école dans le genre</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
