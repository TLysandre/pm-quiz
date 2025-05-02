// GoofyModeContext.js
import React, { createContext, useContext, useState } from 'react';

const GoofyModeContext = createContext();

export const GoofyModeProvider = ({ children }) => {
  const [isGoofyMode, setIsGoofyMode] = useState(true);

  const toggleGoofyMode = () => {
    setIsGoofyMode(!isGoofyMode);
  };

  return (
    <GoofyModeContext.Provider value={{ isGoofyMode, toggleGoofyMode }}>
      {children}
    </GoofyModeContext.Provider>
  );
};

export const useGoofyMode = () => {
  return useContext(GoofyModeContext);
};
