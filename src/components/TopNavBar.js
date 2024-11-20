import React from 'react';
import './TopNavBar.css';
import tf_logo from '../images/tflogo.png';
import {Link} from 'react-router-dom';

function TopNavBar(){
    return(
        <div className="topnav">
            <a href="#" className="logo">
                <img src={tf_logo} alt='tf logo'></img>
            </a>
            <ul className="headerLinks">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/svth">SVTH</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/more">More</Link>
                </li>
            </ul>
        </div>
    );
}

export default TopNavBar