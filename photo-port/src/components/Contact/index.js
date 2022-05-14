import React, { useState } from 'react';

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(formState);
    };

    return (
        <section>
            <h1>Contact Form</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} defaultValue={email} />
                <label htmlFor="message">Message</label>
                <textarea name="message" onChange={handleChange} defaultValue={message}></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;