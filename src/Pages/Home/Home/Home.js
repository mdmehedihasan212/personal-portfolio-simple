import React from 'react';
import About from '../../About/About';
import Contact from '../Contact/Contact';
import EducationSkills from '../EducationSkills/EducationSkills';
import Experience from '../Experience/Experience';
import Family from '../Family/Family';
import Introduction from '../Introduction/Introduction';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Introduction />
            <About />
            <Services />
            <Experience />
            <EducationSkills />
            <Family />
            <Contact />
        </div>
    );
};

export default Home;