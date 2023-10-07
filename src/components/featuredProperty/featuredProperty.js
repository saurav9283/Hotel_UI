import React from "react";
import "./featuredProperty.css";
import hotel from "../images/hotel.jpeg"

function featuredProperty() {
  return (
    // <>
    <div className="fp">
      <div className="fpItem">
        <img src={hotel} alt="" className="fpImg"></img>
        <span className="fpname">Aparhotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button className="fpButton">8.9</button>
          <span>Excillent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={hotel} alt="" className="fpimg"></img>
        <span className="fpname">Aparhotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button className="fpButton">8.9</button>
          <span>Excillent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={hotel} alt="" className="fpImg"></img>
        <span className="fpname">Aparhotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button className="fpButton">8.9</button>
          <span>Excillent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={hotel} alt="" className="fpImg"></img>
        <span className="fpname">Aparhotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button className="fpButton">8.9</button>
          <span>Excillent</span>
        </div>
      </div>
      </div>
    // </>
  );
}

export default featuredProperty;