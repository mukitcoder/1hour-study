import React from "react";
import "./Review.css";
import topImage from "../../images/left-bg-shape.svg";

const ReviewDetails = ({ testiMonialDetail }) => {
  const { name, title, address, description, img } = testiMonialDetail;
  return (
    <div className="">
      {/* <div className="top-image">
        <img src={topImage} alt="" />
      </div> */}
      <div class="card h-100 mx-3 mb-5 px-4 py-5 shadow review">
        <div class="d-flex">
          <img src={img} class="card-img-top" alt="..." />
          <div className="ps-3">
            <h5 className="fw-bold">{name} </h5>
            <p>{address} </p>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title hero-text">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
