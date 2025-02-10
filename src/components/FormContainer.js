import React from 'react';
import './FormContainer.scss';
import ContactForm from './ContactForm.js';
import hexagon from '../images/hexagon.png';

function FormContainer(){
    return(
        <div className="formcont">
            <div className="formcont1">
                <ContactForm />
                <div className="dividerline"></div>
            </div>

            <div className="formcont2">

                
                    <div className="bluecirclecont">
                        <div className="contactcont">
                            <div>
                                <h3>Call Us</h3>
                                <p>(408) 881-3598</p>
                            </div>

                            <div>
                                <h3>Send Email</h3>
                                <p>info@tafolla-manzano.com</p>
                            </div>

                            <div>
                                <h3>Send Letter</h3>
                                <p>The Tafolla-Manzano Company</p>
                                <p>2607 Yorkshire Drive</p>
                                <p>Antioch, CA 94531</p>
                            </div>

                        </div>
                    </div>

                    <h3 className="reachout">Thank you for reaching out</h3>
                    <p className="description">We’ll get back to you as soon as we can. If you have more urgent questions, feel free to call us.</p>
            
                    <img src={hexagon} alt="hexagon decor" loading="lazy"></img>
            </div>

        </div>
    );

}

export default FormContainer;