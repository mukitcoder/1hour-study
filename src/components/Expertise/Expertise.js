import React from "react";
import "./Expertise.css";
import skill from "../../images/expertise/Group-1.png";
import expert from "../../images/expertise/Group-1.png";
import quiz from "../../images/expertise/Group-1.png";

const Expertise = () => {
  return (
    <div className="expertise-main py-3 my-5">
      <h2 className="text-center fw-bold w-75 mx-auto my-5">
        আমাদের <span className="hero-text">বিশেষত্ব</span>
      </h2>
      <div className="container">
        <div className="row g-5 pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">নতুনদের জন্য ফ্রি কোর্স</h5>
                <p className="px-2">
                  নতুন যারা কোর্স করবেন তাদের জন্য বেসিক আইটি স্কিলের ফ্রি কোর্স
                  রয়েছে।{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">পেইড কোর্সের লাইভ সাপোর্ট</h5>
                <p className="px-2">
                1 HOUR STUDY সকল কোর্সে মেন্টরগন লাইভ সাপোর্ট প্রদান করে থাকে। 
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">অভিজ্ঞ প্রশিক্ষক</h5>
                <p className="px-2">
                দক্ষ ও অভিজ্ঞ প্রশিক্ষক দ্বারা প্রতিটি কোর্স সাজানো হয়ে থাকে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">বাড়ির কাজ</h5>
                <p className="px-2">
                প্রতি কোর্সে লাইভ ক্লাস হবে এবং   ক্লাসের শেষে বাড়ির কাজ দেয়া হয়ে থাকে।
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">নতুনদের জন্য ফ্রি কোর্স</h5>
                <p className="px-2">
                  নতুন যারা কোর্স করবেন তাদের জন্য বেসিক আইটি স্কিলের ফ্রি কোর্স
                  রয়েছে।{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-grid bg-white p-2 expertise-section">
              <img className="img-fluid mx-auto" src={skill} alt="expertiseImage" />
              <div className="text-center">
                <h5 className="py-2">নতুনদের জন্য ফ্রি কোর্স</h5>
                <p className="px-2">
                  নতুন যারা কোর্স করবেন তাদের জন্য বেসিক আইটি স্কিলের ফ্রি কোর্স
                  রয়েছে।{" "}
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
