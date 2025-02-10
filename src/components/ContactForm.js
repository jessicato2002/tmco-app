import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss'
import {Link} from 'react-router-dom';
import whitecheckmark from '../images/whitecheckmark.png';
import OrangeButton from './OrangeButton';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwzpwqv"); // Replace with your Formspree project ID
  if (state.succeeded) {
        return <div className="submitcontent">
        <img src={whitecheckmark} alt="white check mark" loading="lazy"></img>
        <h2>Thank you!</h2>
        <p>We have received your submission and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to learn more about the Tafolla-Manzano Company</p>
        <Link to="/more">
        <OrangeButton width='200px'>Learn More </OrangeButton>
        </Link>
        </div>;
  }
  return (
    <form onSubmit={handleSubmit} className="contform">
        <p>Send Message</p>
        <div className="wline"></div>

        <label for="name"> First and Last Name </label>
        <input
            id="name"
            type="text" 
            name="name"
        />

        <label htmlFor="email"> Email Address </label>
        <input
            id="email"
            type="email" 
            name="email"
        />

        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />

        <label htmlFor="topic"> Topic </label>
        <input
            id="subject"
            type="text" 
            name="subject"
        />

        <p>Please Select One</p>
        <div className="radio-group">
            <div className="radio-one">
            <input type="radio" id="tmco" name="option" value="Tafolla-Manzano Company"/>
            <label for="tmco"> Tafolla-Manzano Company</label>
            </div>

            <div className="radio-two">
            <input type="radio" id="svth" name="option" value="Sillicon Valley Tech Hub"/>
            <label for="svth"> Sillicon Valley Tech Hub</label>
            </div>
        </div>

        <label for="message">Message</label>
        <textarea
            id="message"
            name="message"
        />

        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
            Send Form
        </button>
    </form>
  );
}

export default ContactForm;
