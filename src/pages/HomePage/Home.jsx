import React from 'react';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import {GetApp} from '@material-ui/icons'
import './Home.css';
import ChartArea from '../../components/Charts/ChartArea';
import ChartBar from '../../components/Charts/ChartBar';
import ChartPie from '../../components/Charts/ChartPie';
import AboutAdmin from '../../components/AboutAdmin/AboutAdmin';

function Home() {
    return (
        <div className="home">
            <div className="homeTitle">
                <h2 className="dashboardTitle">Dashboard</h2>
                <button className="reportButton"><GetApp/>Generate Report</button>
            </div>
            <FeaturedInfo/>
            <div className="homeChart1">
                <ChartArea/>
                <ChartPie/>
            </div>
            <div className="homeChart2">
                <ChartBar/>
                <AboutAdmin/>
            </div>
        </div>
    )
}

export default Home;
