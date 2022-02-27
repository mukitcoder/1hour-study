import React from "react";
import loginPic from "../../images/login.png";
import logo from "../../images/logo.png";
import facebook from "../../images/icons/fb.png";
import google from "../../images/icons/google.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        <div className="col-md-6 col-sm-12">
          <div className="login-form text-center">
            <img className="" src={logo} alt="" />
            <h2 className="fw-bold my-4">সাইন ইন করুন</h2>
            <p>
              রেজিস্ট্রেশনের সময় যে ই-মেইল এড্রেস এবং পাসওয়ার্ড দিয়ে অ্যাকাউন্ট
              ওপেন করেছেন সেই একই তথ্য দিয়ে সাইন ইন করুন।
            </p>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="ইমেইল"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control py-3"
                id="exampleInputPassword1"
                placeholder="পাসওয়ার্ড"
              />
            </div>
            <button
              type="submit"
              className="btn login-btn fw-bolder fs-4 w-100"
            >
              সাইন ইন
            </button>
          </form>
          <p className="text-center my-3">
            পাসওয়ার্ড ভুলে গেলে <a href="#">এখানে</a> ক্লিক করুন <br />
            অথবা সাইন ইন করুন
          </p>
          <div className="d-flex justify-content-center">
            <div className="me-3 login-logo d-flex justify-content-center align-items-center">
              <img src={facebook} alt="" />
            </div>
            <div className="login-logo d-flex justify-content-center align-items-center">
              <img src={google} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6  login-picture">
          <img className="d-none d-lg-block" src={loginPic} alt="loginPic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
