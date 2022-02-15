import React from 'react';
import Courses from '../Courses/Courses';
import Expertise from '../Expertise/Expertise';
import Hero from '../Hero/Hero';
import StartCourse from '../StartCourse/StartCourse';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Courses/>
            <Expertise/>
            <StartCourse/>
        </div>
    );
};

export default Home;