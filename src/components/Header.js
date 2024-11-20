import React from 'react';
import './Header.scss';
import orangearrow from '../images/orangearrow.png'
import tompic from '../images/tomheadshot.png'
import largecircle from '../images/largecircle.png'

function Header(){
    return(
        <div className="body">
            <div className="cont1">
                <h1>Innovative, Professional, Competent</h1>
                <div className="orangeLine"></div>
                <p className="description">Founded in 2004, the Tafolla-Manzano company (TMCO) aims to bring together all of it’s founder’s talents and experience, to offer users the opportunity to succeed in their careers and life. Along with his current expertise, he aims to expand the Sillicon Valley tech hub to teach young adults meaningful skills needed in Silicon Valley.</p>
                <div className="learnmore">
                    <p>Learn More</p>
                    <img src={orangearrow} alt="orange arrow"></img>
                </div>
                <div className="topquote">
                    <div className="quotewrapper">
                        <div className="orangevertline"></div>
                        <p className="quote">"My Focus is On Success"</p>
                    </div>
                    <p>Tom Tafolla, J.D</p>   
                    <p>Owner/Founder </p>
                </div>
            </div>
            <div className="cont2">
                <div className="picsection">
                    <img className="headshot" src={tompic} alt="Tom's headshot"></img>
                    <img className="largecircle" src={largecircle} alt="large orange circle"></img>
                </div>
            </div>
        </div>
    );
}

export default Header;