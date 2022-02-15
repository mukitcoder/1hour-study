import React from "react";
import logo from "../../images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="brand-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item me-5">
          <a className="nav-link active" aria-current="page" href="#">হোম</a>
        </li>
        
              <li className="nav-item dropdown me-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  সকল কোর্স
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      ডিজিটাল মার্কেটিং
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ওয়েবসাইট ডিজাইন এন্ড ডেভেলপমেন্ট
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      গ্রাফিক্স ডিজাইন
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    কনটেন্ট রাইটিং
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    ভিডিও এডিটিং
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    অ্যানিমেশন
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-5">
          <a className="nav-link" href="#">ক্যারিয়ার</a>
        </li>
              <li className="nav-item">
          <a className="nav-link" href="#">যোগাযোগ</a>
        </li>
            </ul>
            <button className="regular-btn d-flex justify-content-center"><i className='fa-solid fa-arrow-right-to-bracket me-2 fs-5'></i><span>লগ-ইন</span></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
