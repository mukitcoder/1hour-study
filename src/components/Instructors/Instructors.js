import React from "react";
import "./Instructors.css";
import instructor from "../../images/user.png";

const Instructors = () => {
  return (
    <div className="expertise-main pb-5">
      <div className="expertise-text row mb-4">
        <div className="col-md-6 d-flex justify-content-center align-items-center mx-auto py-3 my-5">
          {/* <img className="img-fluid" src={abc4} alt="expertPic" /> */}
          <h2 className="fw-bold">
            আমাদের <span className="hero-text">অভিজ্ঞ প্রশিক্ষকবৃন্দ</span>
          </h2>
        </div>
      </div>
      {/* Card start */}

      <div className="container instructor-main">
        <div className="row row-cols-1 row-cols-md-3 g-4 instructor text-center">
          <div className="col">
            <div className="card h-100">
              <img
                src={instructor}
                className="card-img-top mx-auto my-4"
                alt="instructorPic"
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder">হাসিন হায়দার</h5>
                <p className="card-text lead">
                  এক দশক ধরে প্রোগ্রমিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত। বুয়েটের
                  পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন আমেরিকার
                  নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার
                  হিসেবে দীর্ঘদিন ধরে কাজ করেছেন
                </p>
                <div className="d-flex justify-content-around fs-4 mb-3 instructor-icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={instructor}
                className="card-img-top mx-auto my-4"
                alt="instructorPic"
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder">হাসিন হায়দার</h5>
                <p className="card-text lead">
                  এক দশক ধরে প্রোগ্রমিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত। বুয়েটের
                  পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন আমেরিকার
                  নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার
                  হিসেবে দীর্ঘদিন ধরে কাজ করেছেন
                </p>
                <div className="d-flex justify-content-around fs-4 mb-3 instructor-icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={instructor}
                className="card-img-top mx-auto my-4"
                alt="instructorPic"
              />
              <div className="card-body">
                <h5 className="card-title fw-bolder">হাসিন হায়দার</h5>
                <p className="card-text lead">
                  এক দশক ধরে প্রোগ্রমিং ও ওয়েব ডেভেলপমেন্টের সাথে জড়িত। বুয়েটের
                  পড়ালেখা শেষ করার পর কম্পিউটার সায়েন্সে মাস্টার্স করেন আমেরিকার
                  নর্থ ডেকোটা স্টেট ইউনিভার্সিটি। তারপর সিনিয়র ওয়েব ডেভেলপার
                  হিসেবে দীর্ঘদিন ধরে কাজ করেছেন
                </p>
                <div className="d-flex justify-content-around fs-4 mb-3 instructor-icons">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
