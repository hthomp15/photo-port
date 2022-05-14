import React from 'react';

function ContactForm(){
    return (
        <section>
            <h1>Contact Form</h1>
            <form id="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;