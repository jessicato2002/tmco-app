import React from 'react';
import './CoursesOffered.scss';
import OrangeButton from './OrangeButton.js';
import decor from '../images/decor.png';
import Quote from './Quote.js';

function CoursesOffered(){
    return(
        <div className="coursescont">
            <div className="courses">
                <p>Some of the courses we offer</p>
                <div className="listcont">
                    <ul>
                        <li>English Language Training for Business Professionals and Adult Learners</li>
                        <li>Business Law for Entrepreneuers, Owners, and Business Managers</li>
                        <li>Python Programming Basics</li>
                        <li>Project Management</li>
                        <li>Introduction to Cybersecurity</li>
                        <li>Semiconductor Industry Basics</li>
                    </ul>
                    <img src={decor} className="decor"></img>
                    
                </div>
                <OrangeButton width='260px' className="orangebutton">How to Contact the SVTH</OrangeButton>
            </div>
            <div className="moreinfo">
                <div className="linedecor">
                    <div className="line"></div>
                </div>
                <div className="infocont">
                    <div className="quotecontainer">
                        <div className="firstquote">
                            <Quote>"Reskilling and upskilling to change your future"</Quote>
                        </div>
                        <div className="secondquote">
                            <Quote>"We want to win your trust through performance"</Quote>
                        </div>
                        <p className="parag">The Sillicon Valley Tech Hub is part of the Tafolla Manzano Company. The goal of SVTH is to provide adults top quality courses to make them competitive applicants in the market.</p>
                        <div className="orbutton">
                            <OrangeButton width="300px">About the Leadership of SVTH</OrangeButton>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CoursesOffered;