import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about-me' className='px-5 my-5 position-relative'>
            <h1 className='text-center'>About Me</h1>
            <Card className='border-0'>
                <Card.Body>
                    <Card.Text className='w-75 mx-auto'>
                        <h4>I'm a web developer with a passion for web design in 6 months experience. I enjoy developing simple,clean and slick websites that provide real value to the end user. Delivering work within time.</h4>
                    </Card.Text>
                    <Card.Text className='d-flex justify-content-evenly align-items-center my-5'>
                        <div>
                            <span>Email:</span>
                            <h5 className='text-decoration-underline'>mdmehedihasan384@gmail.com</h5>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <h5>01741-445482</h5>
                        </div>
                        <div>
                            <span>Github:</span>
                            <h5 className='text-decoration-underline'>https://github.com/mdmehedihasan212</h5>
                        </div>
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