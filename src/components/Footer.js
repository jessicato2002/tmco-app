import React from 'react';
import './Footer.scss';
import tflogoblack from '../images/tflogoblack.png';
import fblogo from '../images/fblogo.png';
import iglogo from '../images/iglogo.png';
import ytlogo from '../images/ytlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footercont">
            <div className="footsecone">
                <img src={tflogoblack} alt="Tafolla-Manzano logo black" loading="lazy"></img>
                <p>Creating the next generation of leaders</p>
            </div>
            <div className="footsectwo">
                <ul className="footerlinks">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/svth">Skills Training</Link>
                    </li>
                </ul>
            </div>
            <div className="footsecthree">
                <div>
                <img src={fblogo} alt="Tafolla-Manzano facebook logo" loading="lazy"></img>
                <img src={iglogo} alt="Tafolla-Manzano instagram logo" loading="lazy"></img>
                </div>
                <div>
                
                <img src={ytlogo} alt="Tafolla-Manzano youtube logo" loading="lazy"></img>
                <img src={linkedinlogo} alt="Tafolla-Manzano linkedin logo" loading="lazy"></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;