import React from 'react';
import { TbCircleDotted } from 'react-icons/tb';

const About = () => {
    return (
        <section id='about-me'>
            <article className='text-center'>
                <div>
                    <h1 className='mb-5'>About Me</h1>
                    <p className='w-75 mx-auto mb-4 fs-5'>I'm a web developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client;s requirements is our moto.</p>
                </div>
            </article>
            <article className='d-flex justify-content-around align-content-center'>
                <div style={{ marginLeft: '150px' }}>
                    <h4> <TbCircleDotted /> Name: Md Mehedi Hasan</h4>
                    <h4> <TbCircleDotted /> Age: 25 Years</h4>
                    <h4> <TbCircleDotted /> Nationality: Bangladeshi</h4>
                    <h4> <TbCircleDotted /> Freelance: Available</h4>
                </div>
                <div style={{ marginLeft: '300px' }}>
                    <h4> <TbCircleDotted /> Address: Barishal Sadar, Bangladesh</h4>
                    <h4> <TbCircleDotted /> Phone: 01741-445482</h4>
                    <h4> <TbCircleDotted /> Facebook: mdmehedihasan384</h4>
                    <h4> <TbCircleDotted /> E-mail: mdmehedihasan384@gmail.com</h4>
                </div>
            </article>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary px-5 py-3 mt-2" type="button">Download Resume</button>
            </div>
        </section>
    );
};

export default About;