import React from 'react';
import TopNavBar from '../components/TopNavBar.js';
import Header from '../components/Header.js';
import BusinessActivity from '../components/BusinessActivity.js';
import CompanyInfo from '../components/CompanyInfo.js';
import Footer from '../components/Footer.js';

function HomePage(){
    return(
        <div>
            <TopNavBar />
            <Header />
            <BusinessActivity />
            <CompanyInfo />
            <Footer/>
        </div>
    );
}

export default HomePage;