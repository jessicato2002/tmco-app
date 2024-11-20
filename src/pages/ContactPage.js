import React from 'react';
import TopNavBar from '../components/TopNavBar.js';
import Footer from '../components/Footer.js';
import ContactBanner from '../components/ContactBanner.js';
import FormContainer from '../components/FormContainer.js';

function ContactPage(){
    return(
        <div className="contactpagecont">
            <TopNavBar />
            <ContactBanner />
            <FormContainer />
            <Footer />
        </div>
    );
}

export default ContactPage;