import React from "react";
import "./Featured.css";
import dubai from "../images/dubai.jpeg";
import mountain from "../images/mountain.jpeg";
import sea from "../images/sea.jpeg";
import useFetch from "../hooks/useFetch";

function Featured() {
  const {data , loading , error} = useFetch("https://hotel-management-api.vercel.app/api/hotels/countByCity?cities=Jalandhar,barlin,london")

  return (
    <div className="featured">
      {loading ? "Loading please Wait": (<><div className="featuredItem">
        <img src={dubai} alt="dubai" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Jalandhar</h1>
          <h2>{data[0]}</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={mountain} alt="mountain" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Barlin</h1>
          <h2>{data[1]}</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={sea} alt="sea" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]}</h2>
        </div>
      </div></>)}
    </div>
  );
}

export default Featured;
