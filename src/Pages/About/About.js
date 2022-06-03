import React from 'react';
import { TbCircleDotted } from 'react-icons/tb';

const About = () => {
    return (
        <section id='about-me' className='my-5'>
            <article className='text-center'>
                <div>
                    <h1>About Me</h1>
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