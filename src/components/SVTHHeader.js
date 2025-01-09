import React from 'react';
import styles from './SVTHHeader.module.scss';
import heximage from '../images/heximage.png';
import OrangeButton from './OrangeButton.js';
import tf_logo from '../images/tflogo.png';

function SVTHHeader(){
    return(
        <div className={styles.body}>
            <div className={styles.cont1}>
                <h1>Training at the Silicon Valley Tech Hub (SVTH)</h1>
                <div className={styles.orangeLine}></div>
                <p className={styles.description}>
                At the Silicon Valley Tech Hub, we cater to adult learners and
professionals trying to reskill or upskill into better paying, high-demand
jobs. The SVTH takes people from their current level of functioning and
helps them acquire new skills and knowledge to be more competitive
in the market.
                </p>
                <div className={styles.learnmore}>
                    <OrangeButton width='200px' >View Current Courses</OrangeButton>  
                </div>
                <div className={styles.topquote}>
                    <img src={tf_logo} alt="tf logo"></img>
                    <div className={styles.wholequotecont}>
                        <div className={styles.quotewrapper}>
                            <div className={styles.orangevertline}></div>
                            <p className={styles.quote}>“We go from zero to functional in the shortest time possible.”</p>
                        </div>
                        <p>Tom Tafolla, J.D</p>   
                        <p>Owner/Founder </p>
                    </div>
                </div>
            </div>
            <div className={styles.cont2}>
                <div className={styles.picsection}>
                    <img src={heximage} alt="decor"></img>
                </div>
            </div>
        </div>
    );
}

export default SVTHHeader;