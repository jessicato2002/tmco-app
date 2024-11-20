import React from 'react';
import './HowItWorks.scss';

function HowItWorks(){
    return(
        <div className="howitworkscont">
            <h1>How it Works</h1>
            <div className="steps">
                <div className="conts">
                    <h1 className="num">1</h1>
                    <div className="content">
                        <p className="title">Go To CourseStorm</p>
                        <div className="line"></div>
                        <p className="desc">Navigate to our Coursestorm page link and create an account.</p>
                    </div>
                </div>
                <div className="conts">
                    <h1 className="num">2</h1>
                    <div className="content">
                        <p className="title">Select Courses</p>
                        <div className="line"></div>
                        <p className="desc">Navigate through our list of courses and select one, or a couple of your favorite courses.</p>
                    </div>
                </div>
                <div className="conts">
                    <h1 className="num">3</h1>
                    <div className="content">
                        <p className="title">Start Learning</p>
                        <div className="line"></div>
                        <p className="desc">Gain meaningful skills with courses taught by top professors.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;