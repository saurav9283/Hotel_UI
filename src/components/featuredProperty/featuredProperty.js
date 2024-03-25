import React from "react";
import "./featuredProperty.css";
import hotel from "../images/hotel.jpeg";
import useFetch from "../hooks/useFetch";

function FeaturedProperty() {
  const { data, loading, error } = useFetch(
    // "https://hotel-management-api.vercel.app/api/hotels?featured=true&limit=2"
    "http://localhost:8000/api/hotels?featured=true&limit=2"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              {/* <img src={item.photos[0]} alt="" className="fpImg"></img> */}
              <img src={hotel} alt="" className="fpImg"></img>
              <span className="fpname">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button className="fpButton">{item.rating}</button>
                  <span>Excillent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperty;
