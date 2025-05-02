import React, { useEffect, useState } from 'react';
import { useGoofyMode } from '../context/GoofyModeContext';
import '../styles/background.css';
import '../styles/goofy.css';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isGoofyMode } = useGoofyMode();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const glowStyle1 = {
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
  };

  const glowStyle2 = {
    transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
  };

  const glowStyle3 = {
    transform: `translate(${mousePosition.y * 25}px, ${-mousePosition.x * 25}px)`
  };

  const glowStyle4 = {
    transform: `translate(${-mousePosition.y * 15}px, ${mousePosition.x * 15}px)`
  };

  const gridStyle = {
    transform: `perspective(500px) rotateX(60deg) translateY(${mousePosition.y * 20}px)`
  };

  return (
    <div className={`background ${isGoofyMode ? 'goofy-mode' : ''}`}>
      <div className="background-gradient"></div>
      <div className="background-stars"></div>
      <div className="grid-lines" style={gridStyle}></div>
      <div className="background-glow glow-1" style={glowStyle1}></div>
      <div className="background-glow glow-2" style={glowStyle2}></div>
      <div className="background-glow glow-3" style={glowStyle3}></div>
      <div className="background-glow glow-4" style={glowStyle4}></div>
    </div>
  );
};

export default Background;
