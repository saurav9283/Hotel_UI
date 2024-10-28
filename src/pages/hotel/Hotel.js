import React, { useContext, useState } from "react";
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
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Hotel.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import { searchContext } from "../../components/context/searchContext";
import { AuthContext } from "../../components/context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import axios from "axios";
function Hotel() {
  const navigate = useNavigate()
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const id = pathSegments[2];
  const { data, loading, error } = useFetch(
    // `http://localhost:9000/api/hotels/${id}`
    `https://hotel-management-api.vercel.app/api/hotels/${id}`
  );
  const [slidercount, setslidercount] = useState(0);
  const [open, setopen] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const photos = [
    { src: hotel, alt: "Hotel Room" },
    { src: room, alt: "Room View" },
    { src: bathroom, alt: "Bathroom" },
    { src: entry, alt: "Hotel Entry" },
    { src: sofa, alt: "sofa" },
    { src: dining, alt: "dining" },
  ];
  const {user} = useContext(AuthContext)

  const {dates , options } = useContext(searchContext)
  // console.log(dates)
  const MILLISECONDS_PER_DAY = 1000*60*60*24;
  function dayDifference(date1 , date2){
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = (dayDifference(dates[0]?.endDate , dates[0]?.startDate))

  const handelOpen = (i) => {
    setslidercount(i);
    setopen(true);
  };
  const handelMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slidercount === 0 ? 5 : slidercount - 1;
    } else {
      newSlideNumber = slidercount === 5 ? 0 : slidercount + 1;
    }
    setslidercount(newSlideNumber);
  };

    const CheckoutHandel = async (amount) => {
      try {
        const {
          data: { key },
        } = await axios.get("http://localhost:9000/get_key");
        // } = await axios.get("https://payment-gateway-ui.vercel.app/get_key");
        // console.log(key)
  
        const {
          data: { order },
        } = await axios.post("http://localhost:9000/api/checkout", {
        // } = await axios.post("https://payment-gateway-ui.vercel.app/api/checkout", {
          amount,
        });
  
        const options = {
          key: key, // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Testing Getway",
          description: "wdjkbcbckddcb",
          image: "https://avatars.githubusercontent.com/u/87579538?v=4",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "https://payment-gateway-ui.vercel.app/api/paymentverification",
          // callback_url: "https://payment-gateway-ui.vercel.app/api/paymentverification",
          prefill: {
            name: "Saurav Kumar",
            email: "saurav.kumar@example.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
          
        // console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    // if(user)
    // {
    //     setopenModel(true)
    // }
    // else{
    //   navigate("/login")
    // }
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setopen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handelMove("left")}
              />
              <div className="sliderwrapper">
                <img
                  src={photos[slidercount].src}
                  alt=""
                  className="sliderimage"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handelMove("right")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="booknow" onClick={() => CheckoutHandel(data?.cheapestPrice)}>Reserve or Book Now!</button>
            <h1 className="hoteltitle">{data?.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hoteldistance">
              Excellent location {data?.distance}m from center
            </span>
            <span className="hotelpricehighlight">
              Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi
            </span>
          </div>
          <div className="hotelimages">
            {photos?.map((photo, i) => (
              <div key={i} className="hotelimageWrapper">
                <img
                  onClick={() => handelOpen(i)}
                  src={photo.src}
                  alt={photo.alt}
                  className="hotelimage"
                />
              </div>
            ))}
          </div>
          <div className="hoteldetalis">
            <div className="hoteldetailstexts">
              <h1 className="hoteltitle">{data?.title}</h1>
              <p className="hotelDesc">
                {data?.desc}
              </p>
            </div>
            <div className="hoteldetailsprice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${days * data?.cheapestPrice * options?.room }</b> ({days} nights)
              </h2>
              <button onClick={() => CheckoutHandel(data?.cheapestPrice)}>Reserver or Book Now!!</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {/* {openModel && <Reserve setOpen={setopenModel} hotelId={id}/>} */}
    </div>
  );
}

export default Hotel;