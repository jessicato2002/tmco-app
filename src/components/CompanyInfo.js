import React from 'react';
import './CompanyInfo.scss';
import {Link} from 'react-router-dom';
import tomheadshottwo from '../images/tomheadshottwo.png';
import OrangeButton from './OrangeButton.js';
import hexagon from '../images/hexagon.png';


function CompanyInfo(){
    return(
        <div className="companyinfocont">
            <div className="cont1">
                <img className="secondheadshot" src={tomheadshottwo} alt="second headshot"></img>
            </div>
            <div className="cont2">
                <h1>I help small businesses succeed.</h1>
                <p>The Tafolla-Manzano Company was created by Tafolla to take advantage
                    of his 30-plus years of Silicon Valley work experience and his status as a
                    Professor of Business and Technology Management.</p>
                <div className="buttonanddecor">
                    <Link to="/more">
                        <OrangeButton width='250px'>Learn More About Skills Training</OrangeButton>
                    </Link>
                    <img src={hexagon} alt="hexagon decor"></img>
                </div>
    
            </div>
        </div>

    );
}

export default CompanyInfo;