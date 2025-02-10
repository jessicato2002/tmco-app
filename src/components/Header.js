import React from 'react';
import {Link} from 'react-router-dom';
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
                <p className="description">
                    In 2019, Tom Tafolla obtained permission from the California Bureau for Private Postsecondary Education (BPPE) to operate a business he named the Silicon Valley Tech Hub.
                    Later, the business was renamed the Tafolla-Manzano Company.
                    TMCO is a diversified, privately-held business, focused on reskilling and upskilling training.
                    Others have described the company as a kind of mini-Coursera.
                </p>
                <div className="learnmore">
                    <Link to="/more" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Learn More</p>
                    </Link>
                    <Link to="/more">
                        <img src={orangearrow} alt="orange arrow" loading="lazy"></img>
                    </Link>
                </div>
                <div className="topquote">
                    <div className="quotewrapper">
                        <div className="orangevertline"></div>
                        <p className="quote">"As a business leader, <br></br>I focus on success"</p>
                    </div>
                    <p>Tom Tafolla, J.D</p>   
                    <p>Owner/Founder </p>
                </div>
            </div>
            <div className="cont2">
                <div className="picsection">
                    <img className="headshot" src={tompic} alt="Tafolla-Manzano CEO's headshot" loading="lazy"></img>
                    <img className="largecircle" src={largecircle} alt="large orange circle" loading="lazy"></img>
                </div>
            </div>
        </div>
    );
}

export default Header;