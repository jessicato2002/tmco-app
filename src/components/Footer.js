import React from 'react';
import './Footer.scss';
import tflogoblack from '../images/tflogoblack.png';
import fblogo from '../images/fblogo.png';
import iglogo from '../images/iglogo.png';
import tiktoklogo from '../images/tiktoklogo.png';
import ytlogo from '../images/ytlogo.png';
import linkedinlogo from '../images/linkedinlogo.png';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footercont">
            <div className="footsecone">
                <img src={tflogoblack} alt="tf logo black"></img>
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
                <img src={fblogo} alt="facebook logo"></img>
                <img src={iglogo} alt="instagram logo"></img>
                </div>
                <div>
                
                <img src={ytlogo} alt="youtube logo"></img>
                <img src={linkedinlogo} alt="linkedin logo"></img>
                </div>
            </div>
        </div>
    );
}

export default Footer;