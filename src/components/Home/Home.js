import React from 'react';
import Courses from '../Courses/Courses';
import Courses2 from '../Courses/Courses2';
import Courses3 from '../Courses/Courses3';
import Expertise from '../Expertise/Expertise';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Instructors from '../Instructors/Instructors';
import Review from '../Review/Review';
import SkillDevelopment from '../SkillDevelopment/SkillDevelopment';
import StartCourse from '../StartCourse/StartCourse';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Courses/>
            <Courses2/>
            <Courses3/>
            <Expertise/>
            <StartCourse/>
            <Review/>
            <SkillDevelopment/>
            <Instructors/>
            <Footer/>
        </div>
    );
};

export default Home;