import React from "react";
import abc3 from "../../images/abc-3.png";
import updateCourse from "../../images/icons/update-course.png";
import live from "../../images/icons/live.png";
import teacher from "../../images/icons/teacher.png";
import free from "../../images/icons/free.png";
import certificate from "../../images/icons/certificate.png";
import career from "../../images/icons/target.png";

const SkillDevelopment = () => {
  return (
    <div className="expertise-main py-3 my-5">
      <div className="container pb-4">
      <div className="expertise-text-2 row mx-2 px-2">
        <div className="col-md-9 col-sm-12 d-flex justify-content-center align-items-center mx-auto text-center my-5">
          <img
            className="img-fluid d-none d-lg-block"
            src={abc3}
            alt="expertPic"
          />
          <h2 className="fw-bold">
            1 HOUR STUDY <span className="hero-text">ই-লার্নিং প্লাটফর্ম </span>
            থেকে কেন স্কিল ডেভেলপমেন্ট করবেন ?
          </h2>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="row g-5 pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={updateCourse}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">আপডেট কোর্সের ভান্ডার</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={live}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">লাইভ ক্লাসের মাধ্যমে সাপোর্ট প্রদান </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={teacher}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">
                  অভিজ্ঞ প্রশিক্ষক দ্বারা শিক্ষার্থীকে পাঠদান করা{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={free}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ফ্রি টুলস ও রিসোর্স সরবরাহ করা</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={certificate}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">সার্টিফিকেট/সনদ </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={career}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2">ক্যারিয়ার গঠনে সহায়তা করা </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDevelopment;
