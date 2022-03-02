import React from "react";
import "./Footer.css";
import logo from "../../images/footer-logo.svg";

const Footer = () => {
  return (
    <div className="footer-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-section">
            <img className="img-fluid mb-3" src={logo} alt="brandLogo" />
            <p>
              1 Hour Study বাংলাদেশের অন্যতম সেরা ই-লার্নিং স্কিল ডেভেলপমেন্ট
              প্ল্যাটফর্ম। দক্ষতা উন্নয়নের মাধ্যমে দেশ থেকে বেকারত্ব দূরীকরণ
              এবং বৈশ্বিক মানবসম্পদ তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
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
          <a
            href="https://github.com/mukitcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created By Abdullah Al Mukit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
