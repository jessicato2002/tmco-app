import React from 'react';
import TopNavBar from '../components/TopNavBar.js';
import SVTHHeader from '../components/SVTHHeader.js';
import HowItWorks from '../components/HowItWorks.js';
import CoursesOffered from '../components/CoursesOffered.js';
import Footer from '../components/Footer.js';

function SVTHPage(){
    return(
        <div>
            <TopNavBar />
            <SVTHHeader />
            <HowItWorks />
            <CoursesOffered />
            <Footer />
        </div>
    );
}

export default SVTHPage;