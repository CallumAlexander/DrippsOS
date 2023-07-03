import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard() {

    const timeSeriesData = [
        {label: 'Jan', value: 10},
        {label: 'Feb', value: 20},
        {label: 'Mar', value: 15},
    ];

    return (
        <div>
            <h1>Welcome Traveller, to DrippsOS</h1>
            <TimeSeriesChart data={timeSeriesData}/>
        </div>
    );

}

export default Dashboard;


