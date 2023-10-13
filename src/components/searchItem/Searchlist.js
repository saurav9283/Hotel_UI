import "./Searchlist.css";
import s1 from "../images/searchimg.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Searchlist = ({item}) => {
  const navigate = useNavigate();
 const handelsearch =() => {
  navigate("/hotels")
 }
  return (
    <div className="searchitem">
      {/* <div > */}
      <img src={s1} alt="" className="searchimage" />
      {/* <img src={item.photos[0]} alt="" className="searchimage" /> */}
      {/* </div> */}
      <div className="searchDesc">
        <h1 className="searchTitle">{item.name}</h1>
        <span className="distance">{item.desc}</span>
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
        {item?.rating && <div className="searchitemrating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="searchdetailtaxes">
        <span className="searchprice">${item.cheapestPrice}</span>
        <span className="searchtax">Include taxes and fees</span>
        <Link to={`/hotels/${item._id}`}>
        <button className="searchCheckbutton" onClick={handelsearch}>See availability</button>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default Searchlist;
