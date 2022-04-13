import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='bg-success p-5 text-white'>
            <article className='text-center mt-5'>
                <p>Copyright © {year}. All Rights Reserved.</p>
            </article>
        </section>
    );
};

export default Footer;