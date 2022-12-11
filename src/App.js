import './App.css';
import "./Components/Components.css";
import React, {createContext, useState} from 'react';
import HomePage from './Pages/HomePage';
import Header from './Components/Header';
import * as header_data from './db/header.json' ;

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light');
  const [headers] = useState(header_data.headers);
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark'); else setTheme('light');
  };
  return (
    <ThemeContext.Provider value ={{theme, setTheme}}>
      <div className={`App ${theme}`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Header header_data = {header_data} toggleTheme={toggleTheme}/>
      <HomePage headers = {headers}/>
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
