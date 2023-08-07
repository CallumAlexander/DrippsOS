import logo from './logo.svg';
import './App.css';
import Dashboard from "./Dashboard";
import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import {clear} from "@testing-library/user-event/dist/clear";


const weatherDataPoints = [
    {label: 'Jan', value: 10},
    {label: 'Feb', value: 20},
    {label: 'Mar', value: 15},
];

const powerDataPoints = [
    {label: 'Jan', value: 50},
    {label: 'Feb', value: 60},
    {label: 'Mar', value: 45},
];

const weatherData = [
    {data: weatherDataPoints, title: "Energy generated", subtitle: "In Kwh"},
    {data: weatherDataPoints, title: "Main Sluice Height", subtitle: "Metres"},
    {data: weatherDataPoints, title: "Wheel Sluice Height", subtitle: "Metres"},
    {data: weatherDataPoints, title: "Water throughput", subtitle: "Gallons per second in the trough"},
    {data: weatherDataPoints, title: "Wheel RPM"},
    {data: weatherDataPoints, title: "Valve height", subtitle: "Metres"},
];


const powerData = [
    {data: powerDataPoints, title: "Energy generated", subtitle: "In Kwh"},
    {data: powerDataPoints, title: "Main Sluice Height", subtitle: "Metres"},
    {data: powerDataPoints, title: "Wheel Sluice Height", subtitle: "Metres"},
    {data: powerDataPoints, title: "Water throughput", subtitle: "Gallons per second in the trough"},
    {data: powerDataPoints, title: "Wheel RPM"},
    {data: powerDataPoints, title: "Valve height", subtitle: "Metres"},
];




function App() {

    /* Updating the Colour Scheme functionality */
    const [isDarkMode, setIsDarkMode] = useState(false);

    // For the live updating
    const [data, setData] = useState(powerData);

    useEffect(() => {
        // Update the power data state every second
        const interval = setInterval(() => {
            const updatedData = generateLiveData(data);
            setData(updatedData);
        }, 1000);
        return () => clearInterval(interval);
    }, [data]);

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
                {activeTab === 'weather' && <Dashboard chartsData={weatherData}/>}

                {/* Power Station Dashboard */}
                {activeTab === 'power' && <Dashboard chartsData={powerData}/>}
            </div>


            <Footer/>
        </div>
    );
}


function generateLiveData(dataObjects) {
    const newDataPoints = dataObjects.map((dataObj) => ({
        label: new Date().toLocaleTimeString(),
        value: Math.random() * 100,
    }));

    const updatedData = dataObjects.map((dataObj, index) => ({
        ...dataObj,
        data: newDataPoints[index],
    }));

    return updatedData;
}



export default App;
