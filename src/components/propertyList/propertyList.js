import React from "react";
import "./propertyList.css";
import hotel from "../images/hotel.jpeg"
import appartments from "../images/appartments.jpeg"
import resort from "../images/resort.jpeg"
import villa from "../images/villa.jpeg"
import snow from "../images/snow.jpeg"

function propertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel} alt="" className="pListImg"></img>    
        <div className="pListTitle">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
        </div>    
      </div>

      <div className="pListItem">
        <img src={appartments} alt="" className="pListImg"></img>    
        <div className="pListTitle">
            <h1>Apartment</h1>
            <h2>233 Hotels</h2>
        </div>    
      </div>

      <div className="pListItem">
        <img src={resort} alt="" className="pListImg"></img>    
        <div className="pListTitle">
            <h1>Resorts</h1>
            <h2>233 Hotels</h2>
        </div>    
      </div>

      <div className="pListItem">
        <img src={villa} alt="" className="pListImg"></img>    
        <div className="pListTitle">
            <h1>Villas</h1>
            <h2>233 Hotels</h2>
        </div>    
      </div>

      <div className="pListItem">
        <img src={snow} alt="" className="pListImg"></img>    
        <div className="pListTitle">
            <h1>Cabins</h1>
            <h2>233 Hotels</h2>
        </div>    
      </div>
    </div>
  );
}

export default propertyList;
