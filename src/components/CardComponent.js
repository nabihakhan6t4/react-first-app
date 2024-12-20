import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// Base CardComponent
function CardComponent({ image, title, text, price, rating, isFavorite }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "15px",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Enhanced shadow for better effect
        padding: "0", // Remove extra padding around the card to make the image fit perfectly
      }}
      className="shadow-lg"
    >
      {/* Green Badge with Heart (only for favorite items) */}
      {isFavorite && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "lightgreen",
            padding: "5px 10px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaHeart style={{ color: "white", fontSize: "16px" }} />
        </div>
      )}

      {/* Image */}
      <Card.Img
        variant="top"
        src={image}
        style={{
          objectFit: "cover", // Ensures the image covers the area without distortion
          height: "300px", // Increased height for the image
          width: "100%", // Ensures the image fills the width of the card
          padding: "10px", // Added padding around the image
          borderTopLeftRadius: "15px", // Rounded top left corners
          borderTopRightRadius: "15px", // Rounded top right corners
        }}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        {/* Price and Rating (optional) */}
        {price && rating && (
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span style={{ fontWeight: "bold" }}>${price}</span>
            </div>
            <div className="d-flex align-items-center">
              <FaStar style={{ color: "gold", marginRight: "5px" }} />
              <span>{rating}</span>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
