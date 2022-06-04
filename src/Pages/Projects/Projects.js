import React from 'react';
import './Projects.css';
import project from '../../../src/Assets/profile-pic/profile-pic (46).png';
import { Card, CardGroup } from 'react-bootstrap';

const Projects = () => {
    return (
        // <div class="container">
        //     <img src={project} alt="Avatar" class="image" />
        //     <div class="overlay">
        //         <div class="text">Hello World</div>
        //     </div>
        // </div>
        <section className='my-5 px-5'>
            <h1 className='text-center my-5'>Projects</h1>
            <article>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                </CardGroup>
            </article>
            <article className='mt-4'>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                    <Card className='border border-primary container'>
                        <img variant="top" src={project} className='w-50 mx-auto image' alt='img' />
                        <div className='overlay'>
                            <p className='text'>Card title</p>
                        </div>
                    </Card>
                </CardGroup>
            </article>
        </section>
    );
};

export default Projects;