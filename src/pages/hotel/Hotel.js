import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/mailList.js";
import Footer from "../../components/footer/footer.js";
import hotel from "../../components/images/hotel.jpeg";
import room from "../../components/images/room.jpeg";
import bathroom from "../../components/images/bathroom.jpeg";
import entry from "../../components/images/entry.jpeg";
import sofa from "../../components/images/sofa.jpeg";
import dining from "../../components/images/dining.jpeg";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Hotel.css";
function Hotel() {
  const [slidercount, setslidercount] = useState(0);
  const [open, setopen] = useState(false);
  const photos = [
    { src: hotel, alt: "Hotel Room" },
    { src: room, alt: "Room View" },
    { src: bathroom, alt: "Bathroom" },
    { src: entry, alt: "Hotel Entry" },
    { src: sofa, alt: "sofa" },
    { src: dining, alt: "dining" },
  ];

  const handelOpen = (i) => {
    setslidercount(i);
    setopen(true);
  };
  const handelMove=(direction)=>{
    let newSlideNumber;

    if(direction === "left")
    {
        newSlideNumber = slidercount === 0 ? 5: slidercount-1
    }
    else{
      newSlideNumber = slidercount === 5 ? 0: slidercount+1
    }
    setslidercount(newSlideNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close"onClick={()=>setopen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"  onClick={()=>handelMove("left")}/>
          <div className="sliderwrapper">
            <img src={photos[slidercount].src} alt="" className="sliderimage"/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handelMove("right")}/>
        </div>}
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
          {photos.map((photo, i) => (
            <div key={i} className="hotelimageWrapper">
              <img
                onClick={()=>handelOpen(i)}
                src={photo.src}
                alt={photo.alt}
                className="hotelimage"
              />
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
              Fitted with tiled flooring, Thipurai City features air
              conditioning and a private bathroom with hot showers. In addition
              to a TV with cable channels, a minibar is included. Some rooms
              feature private balconies with panoramic views. Guests can arrange
              for day trips at the tour desk or use the business centre.
              Alternatively, they can enjoy a variety of water sports on Hua Hin
              Beach. Thipurai City Hotel features Thai and European Buffest
              breakfast dishes.
            </p>
          </div>
          <div className="hoteldetailsprice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b>$987</b> (9 nights)
            </h2>
            <button>Reserver or Book Now!!</button>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
