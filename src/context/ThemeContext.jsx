import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const themes = ['theme1', 'theme2', 'theme3'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'theme1');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = ''; 
    document.body.classList.add(theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
