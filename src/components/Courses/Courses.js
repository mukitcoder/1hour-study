import React, { useEffect, useState } from "react";
import "./Courses.css";
import axios from "axios";
import photoshop from "../../images/icons/photoshop.png";
import graphicDesign from "../../images/icons/graphic-design.png";
import adobe from "../../images/icons/adobe-logo.png";
import webDesign from "../../images/icons/web-design.png";
import computer from "../../images/icons/computer.png";
import fiverr from "../../images/icons/fiverr-logo.png";
import cpa from "../../images/icons/skills.png";
import github from "../../images/icons/github-logo.png";
import wp from "../../images/icons/wordpress.png";
import ads from "../../images/icons/google-ads.png";
import english from "../../images/icons/spoken-english.png";
import nft from "../../images/icons/nft.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Zoom } from "react-reveal";

const Courses = () => {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState(items);

  useEffect(() => {
    axios(`/allCourses.json`).then((res) => {
      setItems(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const filterItem = (categoryName) => {
    const updatedItems = filteredData.filter(
      (currentItem) => currentItem.category === categoryName
    );
    setItems(updatedItems);
  };

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="container">
     <Zoom duration={3000} delay={4000}>
     <div>
     <h2 className="text-center fw-bold w-75 mx-auto my-5">
        আইটি স্কিলে নিজেকে দক্ষ করে তুলতে ক্যাটাগরি থেকে নিজের পছন্দের কোর্স
        নির্বাচন করুন এবং শিখে অনলাইনে{" "}
        <span className="hero-text">দক্ষ ক্যারিয়ার</span> তৈরি করুন{" "}
      </h2>
     </div>
     </Zoom>

      {/* tab-menu start */}

      <div className="mb-3 bg-light py-3 px-3 courses">
        <div className="row g-3">
          <OwlCarousel className="owl-carousel owl-theme" {...options}>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn item"
                onClick={() => filterItem("photoshop")}
              >
                <img className="img-fluid mx-3" src={photoshop} alt="tabIcon" />
                <h5 className="fw-bold">ফটোশপ</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("graphic")}
              >
                <img
                  className="img-fluid mx-3"
                  src={graphicDesign}
                  alt="tabIcon"
                />
                <h5 className="fw-bold">গ্রাফিক্স ডিজাইন</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("adobe")}
              >
                <img className="img-fluid mx-3" src={adobe} alt="tabIcon" />
                <h5 className="fw-bold">অ্যাডোবি ইলাস্ট্রেটর</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("webDesign")}
              >
                <img className="img-fluid mx-3" src={webDesign} alt="tabIcon" />
                <h5 className="fw-bold">ওয়েব ডেভেলপমেন্ট</h5>
              </div>
            </div>

            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("computer")}
              >
                <img className="img-fluid mx-3" src={computer} alt="tabIcon" />
                <h5 className="fw-bold">কম্পিউটার</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("fiverr")}
              >
                <img className="img-fluid mx-3" src={fiverr} alt="" />
                <h5 className="fw-bold">ফাইভার</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("cpa")}
              >
                <img className="img-fluid mx-3" src={cpa} alt="" />
                <h5 className="fw-bold">সিপিএ</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("git")}
              >
                <img className="img-fluid mx-3" src={github} alt="" />
                <h5 className="fw-bold">গিট</h5>
              </div>
            </div>

            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("wordpress")}
              >
                <img className="img-fluid mx-3" src={wp} alt="" />
                <h5 className="fw-bold">ওয়ার্ডপ্রেস</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("googleAds")}
              >
                <img className="img-fluid mx-3" src={ads} alt="" />
                <h5 className="fw-bold">গুগল এডস</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => filterItem("spokenEnglish")}
              >
                <img className="img-fluid mx-3" src={english} alt="" />
                <h5 className="fw-bold">স্পোকেন ইংলিশ</h5>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
                onClick={() => setItems(items)}
              >
                <img className="img-fluid mx-3" src={nft} alt="" />
                <h5 className="fw-bold">NFT</h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>

      {/* tab-menu stop */}

      {/* Courses gallery start */}

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {items.slice(0, 3).map((pd) => (
          <div className="col" key={pd?.id}>
            <div className="card h-100 project">
              <img
                src={pd?.image}
                className="card-img-top rounded-3"
                alt="coursesPic"
              />
              <div className="card-body overlay">
               <div className="d-flex justify-content-between">
               <h5 className="card-title fw-bold">{pd?.title}</h5>
                <div className="courses-icon text-danger">
                <i className="fa-regular fa-heart me-3"></i>
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                </div>
               </div>
                <p className="card-text">{pd?.des}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="regular-btn">শেখা শুরু করুন</button>
                  <h6 className="fw-bold">ফি {pd.price}</h6>
                </div>
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
