import React from 'react';
import "./contactForm.css";

function ContactForm() {
  return (
    <div className='formContainer'>
        <h1> Send a message to us! </h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message...' rows="4"></textarea>
            <button className='signUpBtn'> Send Message </button>
        </form>
    </div>
  )
}

export default ContactForm