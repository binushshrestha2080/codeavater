import React from "react";
import Card from "./Card";

const Left = () => {
  return (
    <div className="left">
      <div className="circle-container">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="back">
        <p>
          <span>
            <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.1665 10.5L9.1665 5.5M4.1665 10.5L9.1665 15.5M4.1665 10.5H15.8332"
                stroke="#E0E0E0"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
          </span>
          Back
        </p>
      </div>
      <div className="card-container">
        <div className="title">
          <p>Layout Cards</p>
        </div>
        <div className="cards">
          <div className="row">
            <Card
              image="/singapore.png"
              country="Singapore"
              office="Head Office"
              location="XYZ Pvt. Ltd."
              detail="Road to nowhere, 06-404, 500 Internal Error"
            />
          </div>
          <div className="row">
            <Card
              image="/hongkong.png"
              country="Hong Kong"
              office="Branches"
              location="XYZ Pte. Ltd."
              detail="The Infinite Loop Office, 404 Timeout Plaza"
            />
            <Card
              image="/us.png"
              country="USA"
              office="Branches"
              location="XYZ Inc."
              detail="Nulltown, Buglandia, 500 0xDEADBEE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
