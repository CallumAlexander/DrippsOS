import logo from './logo.svg';
import './App.css';
import Dashboard from "./Dashboard";
import React, {useState} from "react";
import Footer from "./Footer";

function App() {

  /* Updating the Colour Scheme functionality */
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

  const [activeTab, setActiveTab] = useState('weather');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const weatherData = [
    {label: 'Jan', value: 10},
    {label: 'Feb', value: 20},
    {label: 'Mar', value: 15},
  ];

  const powerData = [
    {label: 'Jan', value: 50},
    {label: 'Feb', value: 60},
    {label: 'Mar', value: 45},
  ];

  return (
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>

        <h1>Welcome Traveller, to DrippsOS</h1>

        <button className="toggle-button" onClick={handleToggleMode}>
          Toggle Colour Scheme
        </button>


        <div className="tab-container">
          <button
              className={`tab ${activeTab === 'weather' ? 'active' : ''}`}
              onClick={() => handleTabChange('weather')}
          >
            Weather Station
          </button>
          <button
              className={`tab ${activeTab === 'power' ? 'active' : ''}`}
              onClick={() => handleTabChange('power')}
          >
            ReNES
          </button>
        </div>


        <div className="dashboard-container">
          {/* Weather Station Dashboard */}
          {activeTab === 'weather' && <Dashboard data={weatherData}/>}

          {/* Power Station Dashboard */}
          {activeTab === 'power' && <Dashboard data={powerData}/>}
        </div>


        <Footer/>
      </div>
  );
}

export default App;
