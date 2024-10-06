import React from 'react';
import Footer from './Footer';

export default function ContactUs() {
    return (
        <div className='contactus'>
            <h1>Contact Us</h1>
            <p className="contactus-text">To contact us, enter your name, email address, and message, then press Send.</p>
            <div className='contact-form'>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter your name' />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div className='form-group'>
                    <label>Phone:</label>
                    <input type='tel' placeholder='Enter your phone number' />
                </div>
                <div className='form-group'>
                    <label>Subject:</label>
                    <input type='text' placeholder='Enter the subject' />
                </div>
                <div className='form-group'>
                    <label>Message:</label>
                    <textarea placeholder='Enter your message' />
                </div>
                <button type='submit'>Send</button>
            </div>
            <Footer />
        </div>
    );
}
