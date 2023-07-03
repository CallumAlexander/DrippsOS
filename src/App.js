import './App.css';
import React from "react";
import Dashboard from "./Dashboard";


function App() {
    return (
        <div className="App">
            <h1>Welcome Traveller, to DrippsOS</h1>
            <React.StrictMode>
                <Dashboard/>
            </React.StrictMode>
        </div>
    );
}


export default App;
