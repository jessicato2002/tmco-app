import React from 'react';
import './BusinessActivity.scss';

function BusinessActivity(){
    return(
        <div className="busactcontainer">
            <h1>TMCO's Current Business Activity</h1>
            <div id="circlecont">
                <div className="circle">
                    <p>Entrepreneurship and Management Consulting</p>
                </div>
                <div className="circle">
                    <p>The American Latino Patent History Project</p>
                </div>
                <div className="circle">
                    <p>English Language Training</p>
                </div>
                <div className="circle">
                    <p>Business Law for Owners, Entrepreneurs and Managers</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessActivity;