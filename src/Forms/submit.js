import React from 'react';
import './Forms.css';
import { useState } from 'react';

function Forms() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        // Here you can add logic to send the form data to a server or API
    };

    return (
        <div className="forms-container">
            <h2>Welcome to the Form Page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /> <br/> <br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br/> <br/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/> <br/> <br/>

                <button type="submit">Submit</button> <br/> <br/>
            </form>
        </div>
    );
}
