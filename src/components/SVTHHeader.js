import React from 'react';
import styles from './SVTHHeader.module.scss';
import heximage from '../images/heximage.png';
import OrangeButton from './OrangeButton.js';

function SVTHHeader(){
    return(
        <div className={styles.body}>
            <div className={styles.cont1}>
                <h1>Training from the Silicon Valley Tech Hub (SVTH)</h1>
                <div className={styles.orangeLine}></div>
                <p className={styles.description}>At the Sillicon Valley Tech Hub (SVTH) we cater to adult learners and professionals who are tring to reskill or upskill into better paying high demand jobs. SVTH takes people wherever they are in the learning process and helps them to develop functional competence in the skills they will need to be employed and competetive in the market.</p>
                <div className={styles.learnmore}>
                    <OrangeButton width='200px' >View Current Courses</OrangeButton>
                </div>
                <div className={styles.topquote}>
                    <div className={styles.quotewrapper}>
                        <div className={styles.orangevertline}></div>
                        <p className={styles.quote}>"We call this going from zero to functional in the shortest time possible."</p>
                    </div>
                    <p>Tom Tafolla, J.D</p>   
                    <p>Owner/Founder </p>
                </div>
            </div>
            <div className={styles.cont2}>
                <div className={styles.picsection}>
                    <img src={heximage} alt="hex image"></img>
                </div>
            </div>
        </div>
    );
}

export default SVTHHeader;