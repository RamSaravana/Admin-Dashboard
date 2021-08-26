import React from 'react';
import './AboutAdmin.css';

function AboutAdmin() {
    return (
        <div className="aboutWrapper">
            <div className="aboutTitle">ABOUT "Admin World"</div>
            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Admin_World" />
            <p className="aboutDetails">
            "Admin World" is an application with features to view the Revenue information, Monthy expenses, Sales, Source of revenue,etc. for the growth of your company.
            this applicaiton is built using;
            <li>React.js</li>
            <li>React Router</li>
            <li>Chart.js</li>
            <li>Material UI</li> 
            <li>CSS flex</li>
            </p>
            <p className="aboutDetails">
            (Currently, the App works best on PC/Desktop screen. Working on making it Responsive for Mobile and tablet devices)
            </p>
        </div>
    )
}

export default AboutAdmin;
