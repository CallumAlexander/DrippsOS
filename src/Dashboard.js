import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard() {

    const timeSeriesData = [
        {label: 'Jan', value: 10},
        {label: 'Feb', value: 20},
        {label: 'Mar', value: 15},
    ];

    return (
        <div style={{position: 'absolute', top: '0', left: '0'}}>
            <TimeSeriesChart data={timeSeriesData}/>
        </div>
    );

}

export default Dashboard;


