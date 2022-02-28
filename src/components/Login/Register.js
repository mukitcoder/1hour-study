import React from "react";
import registerPic from "../../images/register.png";
import logo from "../../images/logo.png";
import facebook from "../../images/icons/fb.png";
import google from "../../images/icons/google.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        <div className="col-md-6 col-sm-12 shadow rounded-3">
          <div className="login-form text-center">
            <img className="mt-3" src={logo} alt="" />
            <h2 className="fw-bold my-4">অ্যাকাউন্ট তৈরি করুন</h2>
            <p>
              নিচের ফর্মটি পূরণ করে রেজিস্ট্রেশন সম্পন্ন করুন। রেজিস্ট্রেশন করার
              মাধ্যমে কোর্স আপডেট জানতে পারবেন এবং আপনার পছন্দের কোর্সে এনরোল
              করতে পারবেন।
            </p>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control py-3"
                placeholder="নাম"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control py-3"
                placeholder="মোবাইল"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-3"
                placeholder="ইমেইল"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control py-3"
                placeholder="পাসওয়ার্ড"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control py-3"
                placeholder="রি-টাইপ পাসওয়ার্ড"
                required
              />
            </div>
            <button
              type="submit"
              className="btn login-btn fw-bolder fs-4 w-100"
            >
              সাইন ইন
            </button>
          </form>
          <p className="text-center lead my-4">
            যদি কোন একাউন্ট থাকে তাহলে <Link to="/login">সাইন ইন করুন</Link>
          </p>
          <div className="d-flex justify-content-center mb-4">
            <div className="me-3 login-logo d-flex justify-content-center align-items-center">
              <img src={facebook} alt="" />
            </div>
            <div className="login-logo d-flex justify-content-center align-items-center">
              <img src={google} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6  login-picture">
          <img
            className="d-none d-lg-block"
            src={registerPic}
            alt="registerPic"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
