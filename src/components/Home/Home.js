import React from "react";
import Courses from "../Courses/Courses";
import Expertise from "../Expertise/Expertise";
import Hero from "../Hero/Hero";
import Instructors from "../Instructors/Instructors";
import Review from "../Review/Review";
import SkillDevelopment from "../SkillDevelopment/SkillDevelopment";
import StartCourse from "../StartCourse/StartCourse";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Expertise />
      <StartCourse />
      <Review />
      <SkillDevelopment />
      <Instructors />
    </div>
  );
};

export default Home;
