import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='bg-success py-3 text-white'>
            <p className='text-center m-2'>Copyright © {year}. All Rights Reserved.</p>
        </section>
    );
};

export default Footer;