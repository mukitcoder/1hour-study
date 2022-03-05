import React from "react";
import "./Review.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewDetails from "./ReviewDetails";

const Review = () => {
  const testiMonials = [
    {
      name: "সালমান খান",
      title: "‘‘এখন ফ্রিল্যান্সিং কাজ করছি’’",
      description:
        "ফ্রিল্যান্সিং নিয়ে আমার তেমন জানা ছিলো না। 1 Hour Study এর Freelancing with Adobe Illustrator কোর্সটি করে ডিজাইন ও প্রজেক্ট সম্পর্কে ধারণা পেয়েছি। কোর্স শেষে অনলাইন মার্কেটপ্লেসে কাজ করার গাইডলাইন পেয়েছি।",
      address: "ঢাকা",
      img: "https://i.ibb.co/X3XWCbr/user.png",
    },
    {
      name: "সারমিন সুলতানা",
      title: "‘‘কম সময়ে মূল বিষয়ে শিখেছি ’’",
      description:
        "আমি কয়েকটি লার্নিং প্লাটফর্মে ক্লাস করেছি অনেক সময় প্রাসঙ্গিক কথাকে অনেক দীর্ঘ সময় নিয়ে আলোচনা করায় মূল পয়েন্ট থেকে মনযোগ বিচ্যুত হয়েছে কিন্তু 1 Hour Study এর কোর্সগুলো একদম মূল বিষয়ের উপর ফোকাস করে তৈরি করা হয়েছে।",
      address: "খুলনা",
      img: "https://i.ibb.co/X3XWCbr/user.png",
    },
    {
      name: "মিজানুর রাহমান",
      title: "‘‘আন্তর্জাতিকমানের কোর্স শিখেছি বাংলাতে ’’",
      description:
        "আমরা সাধারনত বিভিন্ন টিউটোরিয়ালগুলো অনলাইনে ইংরেজিতে পেয়ে থাকি। তবে 1 Hour Study প্লাটফর্মে আমি এখন আন্তর্জাতিক মানের কোর্স শিখতে পারছি সহজেই।",
      address: "রাজশাহী",
      img: "https://i.ibb.co/X3XWCbr/user.png",
    },
  ];
  //Owl Carousel Settings
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
    <section className="testimonials pt-5 mb-5">
      <div className="container">
        <div className="text-center mb-5 pb-2 review-text-main">
          <h2 className="fw-bold px-2">
            আমাদের শিক্ষার্থীগন <span className="hero-text">1 HOUR STUDY</span>{" "}
            সম্পর্কে কি ধরনের <br />
            মতামত প্রদান করে থাকেন
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {testiMonials.map((testiMonialDetail) => {
                return (
                  <ReviewDetails
                    testiMonialDetail={testiMonialDetail}
                    key={testiMonialDetail.name}
                  />
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
