import React from 'react'
import './TopBar.css'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';
import {Badge} from '@material-ui/core';

function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin World</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                    <Badge badgeContent={4} color="primary">
                    <NotificationsNone />
                    </Badge>
                    <Badge badgeContent={4} color="primary">
                    <Language />
                    </Badge>
                    <Settings />
                    <img 
                    src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                    alt="User_Profile" 
                    className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
