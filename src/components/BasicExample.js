import React from "react";
import CardComponent from "./CardComponent"; // Import the CardComponent
import image1 from "../images/Fattoush salad.png"; // Images ko import karein
import image2 from "../images/Vegetable salad.png";
import image3 from "../images/Egg salad.png";

function BasicExample() {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <span className="text-danger"> Special Dishes </span>
          <h1>Standout Dishes From Our Menu</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <CardComponent
            image={image1}
            title="Fattoush salad"
            text="Description of the item"
            price="24.00"
            rating="4.9"
            isFavorite={true}
          />
          <CardComponent
            image={image2}
            title="Vegetable salad"
            text="Description of the item"
            price="26.00"
            rating="4.6"
            isFavorite={false}
          />
          <CardComponent
            image={image3}
            title="Egg vegi salad"
            text="Description of the item"
            price="23.00"
            rating="4.5"
            isFavorite={true}
          />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
