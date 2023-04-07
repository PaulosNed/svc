import React from "react";

const Card = ({ image, title, details }) => {
  return (
    <div className="card">
      <img src={image} alt={`${title} image`} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-details">{details}</p>
      </div>
    </div>
  );
};

export default Card;