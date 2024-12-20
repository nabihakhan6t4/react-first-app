// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import image1 from "../images/pngwing 4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import image2 from "../images/pngwing 6.png";
import image3 from "../images/pngwing 3.png";
import image4 from "../images/pngwing 7.png";
function CardComponent({ image, title, text }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "15px",
        border: "2px solid #C1F1C6", // Light green border for the card
        borderRadius: "15px", // Rounded corners for the card
        padding: "20px", // Some space inside the card
        textAlign: "center", // Center align content inside card
      }}
      className="shadow-lg"
    >
      {/* Circular light green border around the image */}
      <div
        style={{
          width: "120px", // Fixed width for the image circle
          height: "120px", // Fixed height for the image circle
          borderRadius: "50%", // Circle shape for the image
          backgroundColor: "#C1F1C6", // Light green background color for the border
          display: "flex", // Use flexbox to center the image inside the circle
          justifyContent: "center", // Center image horizontally
          alignItems: "center", // Center image vertically
          margin: "0 auto", // Center align the image
          border: "5px solid #C1F1C6", // Green border around the image
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{
            objectFit: "cover", // Ensures the image covers the circle area
            width: "80%", // Image size within the circle (adjust as needed)
            height: "80%", // Image size within the circle (adjust as needed)
            borderRadius: "50%", // Keep the image inside the circle
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Cards() {
  return (
    <div className="d-flex container flex-wrap   mb-5   justify-content-center align-items-center">
      <CardComponent image={image1} title="Main Dish" text="(86 dishes)" />
      <CardComponent image={image2} title="Break Fast" text="(12 break fast)" />
      <CardComponent image={image3} title="Dessert" text="(48 dessert)" />
      <CardComponent image={image4} title="Browse All" text="(255 Items)" />
    </div>
  );
}

export default Cards;
