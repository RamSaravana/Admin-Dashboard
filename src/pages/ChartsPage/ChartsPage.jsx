import React from 'react';
import AboutAdmin from '../../components/AboutAdmin/AboutAdmin';
import ChartArea from '../../components/Charts/ChartArea';
import ChartBar from '../../components/Charts/ChartBar';
import ChartPie from '../../components/Charts/ChartPie';
import './ChartsPage.css';

function ChartsPage() {
    return (
        <div>
            <div className="homeTitle">
                <h2 className="dashboardTitle">Charts</h2>
            </div>
            <div className="homeChart2">
                <ChartBar/>
                <AboutAdmin/>
            </div>
            <div className="homeChart1">
                <ChartArea/>
                <ChartPie/>
            </div>
        </div>
    )
}

export default ChartsPage;
