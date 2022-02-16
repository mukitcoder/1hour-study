import React from "react";
import "./StartCourse.css";
import skill from "../../images/expertise/Group-1.png";
import expert from "../../images/expertise/Group-2.png";
import quiz from "../../images/expertise/Group-3.png";
import abc1 from "../../images/abc-1.png";

const StartCourse = () => {
  return (
    <div className="expertise-main py-3 my-5">
      <div className="expertise-text row mb-4 mx-2">
        <div className="col-md-7 d-flex justify-content-center align-items-center mx-auto">
          <img className="img-fluid" src={abc1} alt="expertPic" />
          <h2 className="fw-bold">
            অনলাইনে <span className="hero-text">কোর্স</span> কিভাবে শুরু করবেন ?
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row g-5 pb-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto mb-2"
                src={skill}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ধাপ-১ঃ</h5>
                <p className="px-2">
                  1 HOUR STUDY ওয়েবসাইটে গিয়ে একাউন্ট তৈরি করে নিবেন
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto mb-2"
                src={expert}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ধাপ-২ঃ</h5>
                <p className="px-2">
                  পছন্দের কোর্স ক্যাটাগরি পেইজ থেকে নির্বাচন করবেন
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto mb-2"
                src={quiz}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ধাপ-৩ঃ</h5>
                <p className="px-2">
                  কোর্স ইনরোল করার সময় অনলাইনে পেমেন্ট করতে হবে সমপরিমান মূল্য
                  প্রদান করে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto mb-2"
                src={skill}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ধাপ-৪ঃ</h5>
                <p className="px-2">স্কিল অর্জন ও চর্চা শুরু করুন।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartCourse;