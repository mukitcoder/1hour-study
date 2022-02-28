import React from "react";
import "./Hero.css";
import heroImage from "../../images/hero-image.png";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center text-md-left text-xs-center mt-5">
          <Fade left duration={2000} delay={1000}>
              <div>
              <h1 className="fw-bold">
                আইটি স্কিল ডেভেলপ করুন অনলাইনে{" "}
                <span className="hero-text">স্বাধীন ক্যারিয়ার</span> গড়ুন।
              </h1>
              <p className="fs-5 py-3">
                ডিজিটাল মার্কেটিং, ওয়েবসাইট ডিজাইন এন্ড ডেভেলপমেন্ট, গ্রাফিক্স
                ডিজাইন, কনটেন্ট রাইটিং, ভিডিও এডিটিং এন্ড অ্যানিমেশনসহ সকল ধরনের
                ট্রেন্ডিং কোর্স করুন{" "}
                <span className="hero-text fw-bold">1 HOUR STUDY</span>{" "}
                প্লাটফর্মের সাথে।{" "}
              </p>
              <Link to="allCourses">
              <button className="regular-btn">সকল কোর্স</button>
              </Link>
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade right duration={2000} delay={1000}>
            <img className="img-fluid" src={heroImage} alt="bannerImage" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
