import logo from './logo.svg';
import './App.css';
import Dashboard from "./Dashboard";
import {useState} from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
    updateColorScheme();
  };

  const updateColorScheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--color-primary', '#61afef');
      root.style.setProperty('--color-secondary', '#98c379');
      root.style.setProperty('--color-background', '#282c34');
      root.style.setProperty('--color-text', '#abb2bf');
    } else {
      root.style.setProperty('--color-primary', '#add8e6');
      root.style.setProperty('--color-secondary', '#90ee90');
      root.style.setProperty('--color-background', '#f5f5f5');
      root.style.setProperty('--color-text', '#333333');
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <button className="toggle-button" onClick={handleToggleMode}>
          Toggle Colour Scheme
        </button>
      <div className="Dashboard-dv">
        <Dashboard/>
      </div>

    </div>
  );
}

export default App;
