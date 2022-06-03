import React from 'react';
import './Introduction.css';
import photo from '../../../Assets/profile-pic/profile-pic (46).png';

const Introduction = () => {
    return (
        <section id='home' className='banner-section d-flex justify-content-center align-items-center p-3 mt-0 text-dark'>
            <article className='text-section'>
                <h1>Web developer</h1>
                <h2>Md Mehedi Hasan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus provident error nobis voluptates deleniti quidem minima ab ea sit!</p>
                <button className='contact-btn'>Contact Me</button>
            </article>
            <article className='photo-section'>
                <img src={photo} alt="img-1" />
            </article>
        </section>
    );
};

export default Introduction;