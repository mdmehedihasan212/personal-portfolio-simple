import React from 'react';
import { Card } from 'react-bootstrap';
import { TbCircleDotted } from 'react-icons/tb';

const About = () => {
    return (
        <section id='about-me' className='px-5 my-5'>
            <h1 className='text-center'>About Me</h1>
            <Card className='border-0'>
                <Card.Body>
                    <Card.Text className='w-75 mx-auto'>
                        <h4>I'm a web developer with a passion for web design. I enjoy developing simple,
                            clean and slick websites that provide real value to the end user. Thousands of clients have procured
                            exceptional results while working with me. Delivering work within time and budget which meets client;s
                            requirements is our moto.</h4>

                    </Card.Text>
                    <Card.Text className='text-center'>
                        <TbCircleDotted className='ms-2' /> E-mail: mdmehedihasan384@gmail.com
                        <TbCircleDotted className='ms-2' /> Phone: 01741-445482
                        <TbCircleDotted className='ms-2' /> Github: https://github.com/mdmehedihasan212
                    </Card.Text>
                </Card.Body>
            </Card>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary px-5 py-3 mt-2" type="button">Download Resume</button>
            </div>
        </section>
    );
};

export default About;