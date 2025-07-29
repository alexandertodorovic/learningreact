import React, { useState, createContext } from 'react';
import "./App.css";
import Button from './Button';
import { ThemeContext } from './ThemeContext';

const App3 = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

export default App3;