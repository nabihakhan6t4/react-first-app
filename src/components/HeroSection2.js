import React from 'react';

import image  from '../images/Intersect.png'
const HeroSection2 = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          What Our Customers Say About Us
          </h1>
          <p className="lead">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2">
            Order Now
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Watch Video
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-6">
          <img
            src={image}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
