import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard() {

    const timeSeriesData = [
        {label: 'Jan', value: 10},
        {label: 'Feb', value: 20},
        {label: 'Mar', value: 15},
    ];

    return (
        <div className="grid-container">
      <h1>Welcome Traveller, to DrippsOS</h1>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
      <div className="chart">
        <TimeSeriesChart data={timeSeriesData} />
      </div>
    </div>
    );

}

export default Dashboard;


