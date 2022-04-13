import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../Assets/profile-pic/profile-pic-1.png';
import photo2 from '../../../Assets/profile-pic/profile-pic-2.png';
import photo3 from '../../../Assets/profile-pic/profile-pic-3.png';

const Family = () => {
    return (
        <section id='family'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Family;