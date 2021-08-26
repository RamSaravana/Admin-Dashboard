import React from 'react';
import {Settings, Build, Speed, TableChart, Folder, BarChart} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <Link to='/' className="linkStyle">
                        <h3 className="sidebarTitle dashboard"><Speed/>DASHBOARD</h3>
                    </Link>
                </div><hr />
                <div className="sidebarMenu">    
                    <h3 className="sidebarTitle">INTERFACE</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Settings/>Components</li>
                        <li className="sidebarListItem">
                        <Build/>Utilities</li>
                    </ul>
                </div><hr />
                <div className="sidebarMenu">    
                    <h3 className="sidebarTitle">ADD-ONS</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <Folder/>Pages</li>
                        <Link to='/charts' className="linkStyle">
                        <li className="sidebarListItem workingPage">
                        <BarChart/>Charts</li>
                        </Link>
                        <Link to='/tables' className="linkStyle">
                        <li className="sidebarListItem workingPage">
                        <TableChart/>Tables</li>
                        </Link>
                    </ul>
                </div><hr />
                <div class="attribution">© Coded by <a href="https://www.linkedin.com/in/ramsaravanaraja/" title="RamSaravana_Linkedin_Profile" target="_blank" rel="noreferrer">RamSaravanaRaja</a></div>
            </div>
        </div>
    )
}

export default SideBar
