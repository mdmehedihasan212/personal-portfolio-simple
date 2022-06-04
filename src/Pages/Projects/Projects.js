import React from 'react';
import project from '../../../src/Assets/profile-pic/profile-pic (46).png';
import { Card, CardGroup } from 'react-bootstrap';

const Projects = () => {
    return (
        <section className='my-5 px-5'>
            <h1 className='text-center my-5'>Projects</h1>
            <article>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                </CardGroup>
            </article>
            <article className='mt-4'>
                <CardGroup className='gap-4'>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                    <Card className='border border-primary'>
                        <Card.Img variant="top" src={project} className='w-50 mx-auto' />
                    </Card>
                </CardGroup>
            </article>
        </section>
    );
};

export default Projects;