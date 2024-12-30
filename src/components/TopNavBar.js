import React from 'react';
import './TopNavBar.css';
import tf_logo from '../images/tflogo.png';
import {Link} from 'react-router-dom';

function TopNavBar(){
    return(
        <div className="topnav">
            <Link to="/">
                <img src={tf_logo} alt='tf logo'></img>
            </Link>
            <ul className="headerLinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li style={{height: "40px"}}>
                    <Link style={{display:"flex", alignItems: "center" ,height: "40px" }} to="/svth">Skills Training</Link>
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