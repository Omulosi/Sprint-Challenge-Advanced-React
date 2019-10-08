import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkMode = (props) => {

  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };  

  return (
    <div className="dark-mode__toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      />
    </div>
  )
}

export default DarkMode;
