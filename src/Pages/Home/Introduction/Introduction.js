import React from 'react';
import photo from '../../../Assets/profile-pic/profile-pic-1.png';

const Introduction = () => {
    return (
        <section className='d-flex justify-content-evenly align-items-center'>
            <article>
                <h1>Web developer</h1>
                <h2>Md Mehedi Hasan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis necessitatibus provident error nobis voluptates deleniti quidem minima ab ea sit!</p>
                <button>Contact Me</button>
            </article>
            <article>
                <img src={photo} alt="img-1" />
            </article>
        </section>
    );
};

export default Introduction;