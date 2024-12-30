import React from 'react';
import './HowItWorks.scss';

function HowItWorks(){
    return(
        <div className="howitworkscont">
            <h1>How to Sign Up for SVTH Seminars</h1>
            <div className="steps">
                <div className="conts">
                    <h1 className="num">1</h1>
                    <div className="content">
                        <p className="title">Go To CourseStorm</p>
                        <div className="line"></div>
                        <p className="desc">Click on the CourseStorm link provided</p>
                    </div>
                </div>
                <div className="conts">
                    <h1 className="num">2</h1>
                    <div className="content">
                        <p className="title">Sign Up</p>
                        <div className="line"></div>
                        <p className="desc">Follow the instructions provided on the CourseStorm sign-up page.</p>
                    </div>
                </div>
                <div className="conts">
                    <h1 className="num">3</h1>
                    <div className="content">
                        <p className="title">Start Learning</p>
                        <div className="line"></div>
                        <p className="desc">Gain meaningful skills with courses taught by experienced industry professionals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;