import React from 'react';
import './CoursesOffered.scss';
import {Link} from 'react-router-dom';
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
                    <img src={decor} className="decor" alt="dots and square decor" loading="lazy"></img>
                    
                </div>
                <Link to="/contact">
                    <OrangeButton width='260px' className="orangebutton">How to Contact the SVTH</OrangeButton>
                </Link>
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
                        <p className="parag">
                            The Silicon Valley Tech Hub is part of the Tafolla-Manzano Company. The goal of our organization is to provide adult learners and professionals with high quality seminars to help develop skills that will make you competitive in the marketplace.
                        </p>
                        <div className="orbutton">
                            <Link to="/more">
                                <OrangeButton width="300px">About the Leadership of SVTH & TMCO</OrangeButton>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CoursesOffered;