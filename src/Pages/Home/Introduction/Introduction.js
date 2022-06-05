import React from 'react';
import './Introduction.css';
import photo from '../../../Assets/profile-pic/profile-pic (46).png';

const Introduction = () => {
    return (
        // <section id='home' className='container my-5' style={{ width: '100vw' }}>
        //     <div className="row row-cols-2">
        //         <article className='col-xl-8'>
        //             <span className='fs-5 text-uppercase mt-2'>Hi, I'm a Jnr. Web developer</span>
        //             <h1 className='fs-1 fw-bolder text-uppercase mt-2'>Md Mehedi Hasan</h1>
        //             <p className='fs-4 mt-2'>Barishal, Bangladesh</p>
        //             <button className='btn btn-primary px-5 py-3 mt-2'>View My Project</button>
        //             <button className='border-0 px-5 py-3 mt-2 mx-4'>Contact Me</button>
        //         </article>
        //         <article className='col-xl-4 d-sm-inline-block'>
        //             <img className='img-fluid border border-5 rounded-circle' src={photo} alt="img-1" style={{ width: '300px' }} />
        //         </article>
        //     </div>
        // </section>
        <section id='home' className='introduction d-flex justify-content-around align-items-center p-3 my-5 text-dark'>
            <article className='intro-text w-full mx-auto'>
                <span className='fs-5 text-uppercase mt-2'>Hi, I'm a Jnr. Web developer</span>
                <h1 className='fs-1 fw-bolder text-uppercase mt-2'>Md Mehedi Hasan</h1>
                <p className='fs-4 mt-2'>Barishal, Bangladesh</p>
                <div className="d-flex align-items-center justify-content-between">
                    <button className='btn btn-primary px-5 py-3 mt-2'>View Project</button>
                    <button className='border-0 px-5 py-3 mt-2'>Contact Me</button>
                </div>
            </article>
            <article >
                <img className='intro-img w-75 mx-auto d-flex justify-content-center border border-5 rounded-circle' src={photo} alt="img-1" />
            </article>
        </section>
    );
};

export default Introduction;