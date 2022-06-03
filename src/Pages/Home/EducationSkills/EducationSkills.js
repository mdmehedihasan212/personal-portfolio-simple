import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const EducationSkills = () => {
    return (
        <section id='skills' className='my-5'>
            <h1 className='text-center mt-5'>Education & Skills</h1>
            <div className='d-flex justify-content-center align-content-center'>
                <article>
                    <div>

                    </div>
                </article>
                <article className='w-50'>
                    <div className='d-flex justify-content-between align-items-center px-2 mb-2'>
                        <h5>Html</h5>
                        <h5>80%</h5>
                    </div>
                    <ProgressBar now={80} />
                </article>
            </div>
        </section>
    );
};

export default EducationSkills;