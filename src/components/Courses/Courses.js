import React, { useEffect, useState } from "react";
import "./Courses.css";
import dm from "../../images/digital_marketing.png";

const Courses = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/allCourses.json`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filterItem = (catItem) => {
    const updatedItems = items.filter((currentItem) => currentItem.category === catItem
    )
    setItems(updatedItems);
  };
  return (
    <div className="container">
      <h2 className="text-center fw-bold w-75 mx-auto my-5">
        আইটি স্কিলে নিজেকে দক্ষ করে তুলতে ক্যাটাগরি থেকে নিজের পছন্দের কোর্স
        নির্বাচন করুন এবং শিখে অনলাইনে{" "}
        <span className="hero-text">দক্ষ ক্যারিয়ার</span> তৈরি করুন।{" "}
      </h2>

      {/* tab-menu start */}

      <div className="mb-3 bg-light py-3 px-3">
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
              onClick={() => filterItem("photoshop")}
            >
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">ফটোশপ</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn" onClick={() => filterItem("graphic")}>
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">গ্রাফিক্স ডিজাইন</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn" onClick={() => filterItem("adobe")}>
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">অ্যাডোবি ইলাস্ট্রেটর</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn" onClick={() => filterItem("webDesign")}>
              <img className="img-fluid mx-3" src={dm} alt="" />
              <h5 className="fw-bold">ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট</h5>
            </div>
          </div>
        </div>
      </div>

      {/* tab-menu stop */}

      {/* Courses gallery start */}

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {items.slice(0, 3).map((pd) => (
          <div className="col" key={pd.id}>
            <div className="card h-100">
              <img src={pd.image} className="card-img-top" alt="coursesPic" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Courses gallery stop */}
    </div>
  );
};

export default Courses;
