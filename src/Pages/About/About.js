import React from 'react';
import photo from '../../Assets/profile-pic/profile-pic-2.png';

const About = () => {
    return (
        <section id='aboutus'>
            <article className='d-flex justify-content-evenly align-items-center'>
                <div>
                    <img src={photo} alt="img-2" />
                </div>
                <div>
                    <h1>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora ad et pariatur ipsam soluta quod, blanditiis molestias repellat minima.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque velit officia eum reiciendis inventore molestiae repellendus culpa esse voluptates.
                    </p>
                </div>
            </article>

            <article className='d-flex justify-content-evenly align-items-center'>
                <h3>Personal Details</h3>
                <div>
                    <p>Name: Md Mehedi Hasan</p>
                    <p>Age: 25 Years</p>
                    <p>Nationality: Bangladeshi</p>
                    <p>Freelance: Available</p>
                </div>
                <div>
                    <p>Address: Barishal Sadar, Bangladesh</p>
                    <p>Phone: 01741-445482</p>
                    <p>Facebook: mdmehedihasan384</p>
                    <p>E-mail: mdmehedihasan384@gmail.com</p>
                </div>
                <button>Download CV</button>
            </article>
        </section>
    );
};

export default About;