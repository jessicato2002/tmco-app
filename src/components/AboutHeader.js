import React from 'react';
import './AboutHeader.scss';
import tompic from '../images/tomfullheadshot.jpg';
import Quote from './Quote.js';
function AboutHeader(){
    return(
        <div className="aboutheadercont">
            <img src={tompic} alt="Tafolla-Manzano CEO's headshot" loading="lazy"></img>
            <div className="aboutcont">
                <h1>About the Owner</h1>
                <div className="orline"></div>
                <p className="aboutdesc">
                Tom Tafolla has over 30 years of experience in Silicon Valley. He has
worked as an electromechanical designer, FDA regulatory affairs specialist,
intellectual property administrator, and as a contracts and legal services
manager.
                </p>
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