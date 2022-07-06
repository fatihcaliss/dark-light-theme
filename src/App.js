import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <header>
        <h1>Overreacted</h1>
        <button onClick={toggleTheme} >Toggle</button>
      </header>
      <main>
        <Article data={data} />
      </main>
    </>
  )
}

export default App
