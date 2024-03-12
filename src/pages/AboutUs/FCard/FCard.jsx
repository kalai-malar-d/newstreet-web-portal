import React, { useState } from "react";
import "./FCard.scss"; // Make sure to import your CSS file with the flip styles

const Card = ({ photo }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-front">
        <img src={photo.thumbnailUrl} alt="Card Front" />
      </div>
      <div className="card-back">
        <h2>
          <body>{photo.title}</body>
          <br />
          <span>Senior Designer</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
