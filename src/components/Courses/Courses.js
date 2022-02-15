import React from "react";
import "./Courses.css";
import dm from "../../images/digital_marketing.png";

const Courses = () => {
  return (
    <div className="container">
      <h2 className="text-center fw-bold w-75 mx-auto my-5">
        আইটি স্কিলে নিজেকে দক্ষ করে তুলতে ক্যাটাগরি থেকে নিজের পছন্দের কোর্স
        নির্বাচন করুন এবং শিখে অনলাইনে{" "}
        <span className="hero-text">দক্ষ ক্যারিয়ার</span> তৈরি করুন।{" "}
      </h2>
      {/* , , , , কম্পিউটার শিক্ষা, মাইক্রোসফট অফিস, মার্কেটপ্লেস, কোরআন শিক্ষা, */}
      {/* tab-menu start */}
      <div className="mb-3 bg-light py-3 px-3">
        <div className="row g-5 mx-auto">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3">
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">ডিজিটাল মার্কেটিং</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3">
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3">
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">ভিডিও এডিটিং এন্ড অ্যানিমেশন</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3">
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">গ্রাফিক্স ডিজাইন</h5>
            </div>
          </div>
        </div>
      </div>
      {/* tab-menu stop */}
    </div>
  );
};

export default Courses;
