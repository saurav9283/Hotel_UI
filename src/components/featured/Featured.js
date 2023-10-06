import React from "react";
import "./Featured.css";
import dubai from "../images/dubai.jpeg";
import mountain from "../images/mountain.jpeg";
import sea from "../images/sea.jpeg";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={dubai} alt="dubai" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Prop</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={mountain} alt="mountain" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Prop</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={sea} alt="sea" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>Prop</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
