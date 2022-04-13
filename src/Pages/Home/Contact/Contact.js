import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='d-flex justify-content-evenly align-items-center'>
            <article>
                <h1>Contact Us</h1>
                <p>01741-445482</p>
                <p>mdmehedihasan384@gmail.com</p>
                <p>Rupatali,Barishal</p>
            </article>
            <article>
                <div>
                    <input type="text" name="name" id="" placeholder='Name' />
                    <input type="text" name="phone" id="" placeholder='Phone' />
                </div>
                <div>
                    <input type="text" name="email" id="" placeholder='Email' />
                    <input type="text" name="subject" id="" placeholder='Subject' />
                </div>
                <input type="text" name="message" id="" placeholder='Message*' />
                <button>Send Message</button>
            </article>
        </section>
    );
};

export default Contact;