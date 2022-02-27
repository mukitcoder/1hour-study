import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer-main py-5">
        <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 footer-section">
          <img
            className="img-fluid d-flex mx-auto"
            src={logo}
            alt="brandLogo"
          />
          <h5 className="fw-bold bg-light px-2 py-2 text-center rounded-pill mt-3">
            আমাদের মোবাইল অ্যাপ ডাউনলোড করুন
          </h5>
        </div>
        <div className="col-lg-2 col-md-6 fs-5 footer-section-2">
          <ul>
            <li className="fw-bold">কোম্পানি</li>
            <li>ক্যারিয়ার</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>রিফান্ড পলিসি</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 fs-5 footer-section-2">
          <ul>
            <li className="fw-bold">কোম্পানি</li>
            <li>ক্যারিয়ার</li>
            <li>প্রাইভেসি পলিসি</li>
            <li>রিফান্ড পলিসি</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <ul>
            <li className="fw-bold fs-5">সামাজিক যোগাযোগ মাধ্যমে আমরা</li>
            <li>
              <span className="fw-bold">Contact:</span> 000-0000000
            </li>
            <li>
              <span className="fw-bold">SMS:</span> SMS - 1HSHelp to 26969
              (24X7)
            </li>
            <li>
              <span className="fw-bold">Email:</span> support@1Hourstudy.com
            </li>
          </ul>
          <div className="d-flex justify-content-around fs-4 mb-3 instructor-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="text-center">
          <p>স্বত্ব © ২০২০-২০২২ 1 Hour Study কতৃক সর্বস্বত্ব সংরক্ষিত</p>
          <a href="https://github.com/mukitcoder" target="_blank" rel="noopener noreferrer">Created By Abdullah Al Mukit</a>
      </div>
    </div>
    </div>
  );
};

export default Footer;
