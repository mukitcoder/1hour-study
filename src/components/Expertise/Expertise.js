import React from "react";
import "./Expertise.css";
import free from "../../images/icons/free.png";
import live from "../../images/icons/live.png";
import teacher from "../../images/icons/teacher.png";
import homeWork from "../../images/icons/home-work.png";
import info from "../../images/icons/info.png";
import intern from "../../images/icons/skills.png";

const Expertise = () => {
  return (
    <div className="expertise-main mt-5">
      <div className="expertise-text row mb-4">
       
          <h2 className="fw-bold text-center">
            আমাদের <span className="hero-text">বিশেষত্ব</span>
          </h2>
     
      </div>
      <div className="container">
        <div className="row g-5 pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={free}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2 fw-bold">নতুনদের জন্য ফ্রি কোর্স</h5>
                <p className="px-2">
                  নতুন যারা কোর্স করবেন তাদের জন্য বেসিক আইটি স্কিলের ফ্রি কোর্স
                  রয়েছে।{" "}
                </p>
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
                <h5 className="py-2 fw-bold">পেইড কোর্সের লাইভ সাপোর্ট</h5>
                <p className="px-2">
                  1 HOUR STUDY সকল কোর্সে মেন্টরগন লাইভ সাপোর্ট প্রদান করে থাকে।
                </p>
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
                <h5 className="py-2 fw-bold">অভিজ্ঞ প্রশিক্ষক</h5>
                <p className="px-2">
                  দক্ষ ও অভিজ্ঞ প্রশিক্ষক দ্বারা প্রতিটি কোর্স সাজানো হয়ে থাকে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={homeWork}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2 fw-bold">বাড়ির কাজ</h5>
                <p className="px-2">
                  প্রতি কোর্সে লাইভ ক্লাস হবে এবং ক্লাসের শেষে বাড়ির কাজ দেয়া
                  হয়ে থাকে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={info}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2 fw-bold">আপডেট তথ্য ভিত্তিক কোর্স</h5>
                <p className="px-2">
                  1 HOUR STUDY সকল কোর্সে প্রশিক্ষকগন আপডেট তথ্য দিয়ে কোর্স
                  সাজিয়ে থাকে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img
                className="img-fluid mx-auto my-2"
                src={intern}
                alt="expertiseImage"
              />
              <div className="text-center">
                <h5 className="py-2 fw-bold">ইন্টার্নশিপ করার সুযোগ</h5>
                <p className="px-2">
                  প্রতিটি অনলাইন কোর্স থেকে কতিপয় শিক্ষার্থীকে ইন্টার্নশিপ করার
                  সুযোগ প্রদান করে থাকি।{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
