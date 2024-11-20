import React from 'react';
import './AboutHeader.scss';
import tompic from '../images/tomfullheadshot.jpg';
import Quote from './Quote.js';
function AboutHeader(){
    return(
        <div className="aboutheadercont">
            <img src={tompic}></img>
            <div className="aboutcont">
                <h1>About the Owner</h1>
                <div className="orline"></div>
                <p className="aboutdesc">Tom Tafolla has over 20 years of experience working in Silicon Valley Tech Companies both as an electromechanical designer of hardware products and in support of senior corporate management in positions such as intellectual property administrator, contracts manager, regulatory compliance specialist, and legal services manager.</p>
                <div className="categcont">
                   
                    <Quote>Entrepreneur</Quote>
                    <Quote>Management Consultant</Quote>
                    <Quote>Professor of Business and Technology Management</Quote>
                    <Quote>Academic Research Scholar</Quote>
                    
                   
                </div>

            </div>
        </div>
    );
}

export default AboutHeader;