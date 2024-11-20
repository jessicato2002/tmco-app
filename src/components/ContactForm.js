import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss'

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwzpwqv"); // Replace with your Formspree project ID
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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
