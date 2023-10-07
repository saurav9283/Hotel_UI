import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hotel from "../../components/images/hotel.jpeg";
import room from "../../components/images/room.jpeg";
import bathroom from "../../components/images/bathroom.jpeg";
import entry from "../../components/images/entry.jpeg";
import sofa from "../../components/images/sofa.jpeg";
import dining from "../../components/images/dining.jpeg";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
function Hotel() {
  const photos = [
    { src: hotel, alt: "Hotel Room" },
    { src: room, alt: "Room View" },
    { src: bathroom, alt: "Bathroom" },
    { src: entry, alt: "Hotel Entry" },
    { src: sofa, alt: "sofa" },
    { src: dining, alt: "dining" },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
        <button className="booknow">Reserve or Book Now!</button>
          <h1 className="hoteltitle">Grande Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New york</span>
          </div>
          <span className="hoteldistance">
            Excellent location 500m from center
          </span>
          <span className="hotelpricehighlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
        </div>
        <div className="hotelimages">
          {photos.map((photo, index) => (
            <div key={index} className="hotelimageWrapper">
              <img src={photo.src} alt={photo.alt} className="hotelimage" />
            </div>
          ))}
        </div>
        <div className="hoteldetalis">
          <div className="hoteldetailstexts">
          <h1 className="hoteltitle">Stay in heart❤️ of Krakow</h1>
          <p className="hotelDesc">
            You're eligible for a Genius discount at Thipurai City Hotel! To
            save at this property, all you have to do is sign in. About 200
            metres from Hua Hin Beach and Night Market, Thipurai features an
            outdoor pool and a restaurant with ocean and city views. It offers
            accommodation with a seating area. Thipurai City Hotel is 600 km
            from Hua Hin Railway Station and about 9 km from Hua Hin Airport.
            Fitted with tiled flooring, Thipurai City features air conditioning
            and a private bathroom with hot showers. In addition to a TV with
            cable channels, a minibar is included. Some rooms feature private
            balconies with panoramic views. Guests can arrange for day trips at
            the tour desk or use the business centre. Alternatively, they can
            enjoy a variety of water sports on Hua Hin Beach. Thipurai City
            Hotel features Thai and European Buffest breakfast dishes.
            </p>
          </div>
          <div className="hoteldetailsprice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
            <h2>
              <b>$987</b> (9 nights)
            </h2>
            <button>Reserver or Book Now!!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
