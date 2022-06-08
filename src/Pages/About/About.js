import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from './Md-Mehedi-Hasan-Resume-2022.pdf';
import { Card } from 'react-bootstrap';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <section data-aos="fade-up" id='about-me' className='px-5 my-5 position-relative'>
            <h1 className='text-center'>About Me</h1>
            <Card className='border-0'>
                <Card.Body>
                    <Card.Text className='about-intro w-75 mx-auto'>
                        <h4>I'm a web developer with a passion for web design in 6 months experience. I enjoy developing simple,clean and slick websites that provide real value to the end user.</h4>
                    </Card.Text>
                    <Card.Text className='addition-info d-flex justify-content-center align-items-center my-5 gap-5'>
                        <div>
                            <span>Email:</span>
                            <h5>mdmehedihasan384@gmail.com</h5>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <h5>01741-445482</h5>
                        </div>
                        <div>
                            <span>Github:</span>
                            <a href="https://github.com/mdmehedihasan212">
                                <h5 className='text-decoration-underline text-black'>https://github.com/mdmehedihasan212</h5>
                            </a>
                        </div>
                    </Card.Text>
                    <Card.Text className='addition-info d-flex justify-content-center align-items-center my-5 gap-5'>
                        <div>
                            <span>Stack overflow:</span>
                            <h5>https://stackoverflow.com/users/18265138/md-mehedi-hasan</h5>
                        </div>
                        <div>
                            <span>Linkedin:</span>
                            <h5>01741-445482</h5>
                        </div>
                        <div>
                            <span>Github:</span>
                            <a href="https://github.com/mdmehedihasan212">
                                <h5 className='text-decoration-underline text-black'>https://github.com/mdmehedihasan212</h5>
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div class="d-flex justify-content-center align-items-center">
                <a href={resume} download="Md Mehedi Hasan_Web Development_Resume_22 - Google Docs.pdf">
                    <button class="resume-button btn btn-primary px-5 py-3 mt-2" type="button">Download PDF Resume</button>
                </a>
            </div>
        </section>
    );
};

export default About;