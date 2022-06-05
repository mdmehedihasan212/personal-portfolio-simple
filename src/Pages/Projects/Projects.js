import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import electro from '../../../src/Assets/project-img/electro-manufacturing.png';
import phone from '../../../src/Assets/project-img/equipment-warehouse.png';
import wedding from '../../../src/Assets/project-img/weadding.png';
import constriction from '../../../src/Assets/project-img/under-constraction.png';
import { Card, CardGroup } from 'react-bootstrap';

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <section data-aos="fade-up" id='projects' className='my-5 px-5'>
            <h1 className='text-center my-5'>Projects</h1>
            <article>
                <CardGroup className='gap-4'>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={electro} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <a href="https://electro-manufacturing.web.app/">
                                <button className='text'>Go Live</button>
                            </a>
                        </div>
                    </Card>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={phone} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <a href="https://phone-garage-d9a85.web.app/">
                                <button className='text'>Go Live</button>
                            </a>
                        </div>
                    </Card>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={wedding} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <a href="https://wedding-photography-4229f.web.app/">
                                <button className='text'>Go Live</button>
                            </a>
                        </div>
                    </Card>
                </CardGroup>
            </article>
            <article className='mt-4'>
                <CardGroup className='gap-4'>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={constriction} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <button className='text'>Go Live</button>
                        </div>
                    </Card>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={constriction} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <button className='text'>Go Live</button>
                        </div>
                    </Card>
                    <Card data-aos="zoom-in" className='container'>
                        <img variant="top" src={constriction} className='w-100 mx-auto image' alt='img' style={{ height: '300px' }} />
                        <div className='middle'>
                            <button className='text'>Go Live</button>
                        </div>
                    </Card>
                </CardGroup>
            </article>
        </section>
    );
};

export default Projects;