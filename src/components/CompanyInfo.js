import React from 'react';
import './CompanyInfo.scss';
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
                <h1>I help corporate leaders succeed in their business goals.</h1>
                <p>The Tafolla Manzano Company was created by Tom Tafolla to incorporate all of his expertise and help people succeed in their careers. He has 30 years of experience as a higher education educator, offers consulting services, and now has added the Sillicon Valley Tech Hub (SVTH). The SVTH offers in demend skills to young professionals, leading to employment in the fasted time possible. To learn more, navigate to the SVTH tab and feel free to contact me with any questions.</p>
                <div className="buttonanddecor">
                    <OrangeButton width='200px'>Learn More About SVTH</OrangeButton>
                    <img src={hexagon} alt="hexagon decor"></img>
                </div>
    
            </div>
        </div>

    );
}

export default CompanyInfo;