import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const EducationSkills = () => {
    return (
        <section id='skills' className='my-5 px-5'>
            <h1 className='text-center my-5'>Programming Skills</h1>
            <article className='w-100 mx-auto text-center d-flex align-items-center justify-content-between'>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Html 5</h5>
                        <h5>80%</h5>
                    </div>
                    <ProgressBar animated now={80} />
                </div>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Css 3</h5>
                        <h5>70%</h5>
                    </div>
                    <ProgressBar animated now={70} />
                </div>
            </article>
            <article className='w-100 mx-auto text-center d-flex align-items-center justify-content-between'>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Bootstrap</h5>
                        <h5>60%</h5>
                    </div>
                    <ProgressBar animated now={60} />
                </div>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Javascript & ES6</h5>
                        <h5>70%</h5>
                    </div>
                    <ProgressBar animated now={70} />
                </div>
            </article>
            <article className='w-100 mx-auto text-center d-flex align-items-center justify-content-between'>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>React</h5>
                        <h5>70%</h5>
                    </div>
                    <ProgressBar animated now={70} />
                </div>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>NodeJs</h5>
                        <h5>50%</h5>
                    </div>
                    <ProgressBar animated now={50} />
                </div>
            </article>
            <article className='w-100 mx-auto text-center d-flex align-items-center justify-content-between'>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Express</h5>
                        <h5>50%</h5>
                    </div>
                    <ProgressBar animated now={50} />
                </div>
                <div className='w-50 px-5'>
                    <div className='d-flex justify-content-between align-items-center px-2 mt-4 mb-2'>
                        <h5>Mongodb</h5>
                        <h5>50%</h5>
                    </div>
                    <ProgressBar animated now={50} />
                </div>
            </article>
        </section>
    );
};

export default EducationSkills;