import React from "react";

const Card = ({ image, country, office, location, detail }) => {
  return (
    <div className="card">
      <img src={image} alt={country} />
      <div className="text">
        <div className="country">
          <h1>{country}</h1>
          <p className="office">{office}</p>
        </div>
        <div className="location">
          <p>{location}</p>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
