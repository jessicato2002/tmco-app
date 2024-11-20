import React from 'react';
import './Footer.scss';
import tflogoblack from '../images/tflogoblack.png';
import fblogo from '../images/fblogo.png';
import iglogo from '../images/iglogo.png';
import xlogo from '../images/xlogo.png';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footercont">
            <div className="footsecone">
                <img src={tflogoblack} alt="tf logo black"></img>
                <p>Leading the next generation of leaders</p>
            </div>
            <div className="footsectwo">
                <ul className="footerlinks">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/svth">SVTH</Link>
                    </li>
                </ul>
            </div>
            <div className="footsecthree">
                <img src={fblogo}></img>
                <img src={iglogo}></img>
                <img src={xlogo}></img>
            </div>
        </div>
    );
}

export default Footer;