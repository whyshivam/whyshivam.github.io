import './App.css';
import React, {useState} from 'react';
import HomePage from './Pages/HomePage';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark'); else setTheme('light');
  };
  return (
    <div className={`App ${theme}`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
     
      <HomePage/>
    </div>
  );
}

export default App;
