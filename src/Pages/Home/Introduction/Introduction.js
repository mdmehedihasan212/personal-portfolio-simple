import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import './Introduction.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../../Assets/profile-pic/profile-pic (46).png';
import { Nav } from 'react-bootstrap';

const Introduction = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 2000,
        onRest: () => set(!flip),
    })

    return (
        <section id='home' className='introduction d-flex justify-content-around align-items-center p-3 my-5 text-dark'>
            <article data-aos="fade-right" className='intro-text w-full mx-auto'>
                <span className='fs-5 text-uppercase mt-2'>Hi, I'm a Jr. Web developer</span>
                <animated.h1 style={props} className='fs-1 fw-bolder text-uppercase mt-2'>Md Mehedi Hasan</animated.h1>
                <p className='fs-4 mt-2'>Barishal, Bangladesh</p>
                <div className='intro-text w-50'>
                    <Nav.Link href="#projects" className='btn btn-primary p-2 mt-2 text-white'>Project</Nav.Link>
                </div>
            </article>
            <article data-aos="zoom-in">
                <img className='intro-img w-75 mx-auto d-flex justify-content-center border border-5 rounded-circle' src={photo} alt="img-1" />
            </article>
        </section>
    );
};

export default Introduction;