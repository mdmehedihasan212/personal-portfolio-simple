import React from 'react';
import photo from '../../../Assets/profile-pic/profile-pic (46).png';

const Introduction = () => {
    return (
        <section id='home' className='banner-section d-flex justify-content-around align-items-center p-3 mt-2 mb-5 text-dark'>
            <article className='text-section w-full mx-auto'>
                <span className='fs-5 text-uppercase mt-2'>Hi, I'm a Jnr. Web developer</span>
                <h1 className='fs-1 fw-bolder text-uppercase mt-2'>Md Mehedi Hasan</h1>
                <p className='fs-4 mt-2'>Barishal, Bangladesh</p>
                <button className='btn btn-primary px-5 py-3 mt-2'>View My Project</button>
                <button className='border-0 px-5 py-3 mt-2 mx-4'>Contact Me</button>
            </article>
            <article >
                <img className='w-75 mx-auto d-flex justify-content-center border border-5 rounded-circle' src={photo} alt="img-1" />
            </article>
        </section>
    );
};

export default Introduction;