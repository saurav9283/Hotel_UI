import "./Searchlist.css";
import s1 from "../images/searchimg.jpeg";
import { useNavigate } from "react-router-dom";

const Searchlist = () => {
  const navigate = useNavigate();
 const handelsearch =() => {
  navigate("hotels:527h")
 }
  return (
    <div className="searchitem">
      {/* <div > */}
      <img src={s1} alt="" className="searchimage" />
      {/* </div> */}
      <div className="searchDesc">
        <h1 className="searchTitle">Tower Street Apartment</h1>
        <span className="distance">500m from center Road</span>
        <span className="taxioption">Free airpoart taxi</span>
        <span className="subtitle">Studio Apartment with Air conditioning</span>

        <span className="features">
          Entire studio • 1 bathroom • 21 mtr sqr 1 full bed
        </span>
        <span className="canceloption">Free Cancellation</span>
        <span className="cancelsubtitle">
          {" "}
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchdetails">
        <div className="searchitemrating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchdetailtaxes">
        <span className="searchprice">$123</span>
        <span className="searchtax">Include taxes and fees</span>
        <button className="searchCheckbutton" onClick={handelsearch}>See availability</button>

        </div>
      </div>
    </div>
  );
};

export default Searchlist;
