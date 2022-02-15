import React from 'react';
import Courses from '../Courses/Courses';
import Expertise from '../Expertise/Expertise';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Courses/>
            <Expertise/>
        </div>
    );
};

export default Home;