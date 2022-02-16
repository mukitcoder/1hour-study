import React from 'react';
import './Review.css'

const ReviewDetails = ({testiMonialDetail}) => {
    const {name,title, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt=""/>
                <h5 className='fw-bold'>{title}</h5>
                <p>{description}</p>
                <div className='text-warning'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default ReviewDetails;