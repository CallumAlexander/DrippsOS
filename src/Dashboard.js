import React from 'react';
import TimeSeriesChart from './TimeSeriesChart'


function Dashboard({data}) {

    return (
        <div>
            <div className="center-container">
                <div className="grid-container">
                    <div className="chart">
                        <TimeSeriesChart data={data} title_={"Energy generated"} subtitle_={"In Kwh"}/>
                    </div>
                    <div className="chart">
                        <TimeSeriesChart data={data}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data}/>
                  </div>
                  <div className="chart">
                      <TimeSeriesChart data={data}/>
                  </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;


