import React from 'react';
import AboutHeader from '../components/AboutHeader.js';
import TopNavBar from '../components/TopNavBar.js';
import Footer from '../components/Footer.js';
import Timeline from '../components/Timeline.js';
function AboutPage(){
    return(
        <div>
            <TopNavBar />
            <AboutHeader/>
            <Timeline />
            <Footer />
        </div>
    );
}

export default AboutPage;