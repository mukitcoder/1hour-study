import React, { useEffect, useState } from "react";
import "./Courses.css";
import dm from "../../images/digital_marketing.png";
import axios from "axios";
import wp from '../../images/icons/wordpress.png'
import ads from '../../images/icons/google-ads.png'
import english from '../../images/icons/spoken-english.png'
import nft from '../../images/icons/nft.png'

const Courses3 = () => {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState(items);

  useEffect(() => {
    axios(`/allCourses3.json`).then((res) => {
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
  return (
    <div className="container pt-5 mt-5">
      <h2 className="text-center fw-bold w-75 mx-auto my-5">
       মার্কেটপ্লেস ও কর্মজীবনে নিজের <span className="hero-text">দক্ষ ক্যারিয়ার</span> তৈরি করুন{" "}
      </h2>


      {/* tab-menu start */}

      <div className="mb-3 bg-light py-3 px-3">
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
              onClick={() => filterItem("wordpress")}
            >
              <img className="img-fluid mx-3" src={wp} alt="" />
              <h5 className="fw-bold">ওয়ার্ডপ্রেস</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
              onClick={() => filterItem("googleAds")}
            >
              <img className="img-fluid mx-3" src={ads} alt="" />
              <h5 className="fw-bold">গুগল এডস</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
              onClick={() => filterItem("spokenEnglish")}
            >
              <img className="img-fluid mx-3" src={english} alt="" />
              <h5 className="fw-bold">স্পোকেন ইংলিশ</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="d-flex align-items-center justify-content-center bg-white py-3 tab-btn"
              onClick={() => setItems(items)}
            >
              <img className="img-fluid mx-3" src={nft} alt="" />
              <h5 className="fw-bold">NFT</h5>
            </div>
          </div>
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
                <h5 className="card-title fw-bold">{pd?.title}</h5>
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

export default Courses3;
