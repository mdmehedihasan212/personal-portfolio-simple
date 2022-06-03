import React from 'react';
import About from '../../About/About';
import Contact from '../Contact/Contact';
import EducationSkills from '../EducationSkills/EducationSkills';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div>
            <Introduction />
            <About />
            <EducationSkills />
            {/* <Contact /> */}
        </div>
    );
};

export default Home;