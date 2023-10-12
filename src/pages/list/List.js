import React, { useState } from "react";
import Header from "../../components/header/Header.js";
import Navbar from "../../components/navbar/Navbar.js";
import "./List.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Searchlist from "../../components/searchItem/Searchlist.js";
import useFetch from "../../components/hooks/useFetch.js";
// import reFetch from "../../components/hooks/useFetch.js";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [dates, setDates] = useState(location.state?.dates);
  const [options, setOptions] = useState(location.state?.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error ,reFetch} = useFetch(
    `http://localhost:8000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 1500}`
  );

  const handelClick = () => {
    reFetch();
    }

  return (
    <div>
      <Navbar />
      {location.state ? (
        <>
          <Header type="list" />
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="liItem">
                  <label>Destination</label>
                  <input type="text" placeholder={destination} />
                </div>
                <div className="lsItem">
                  <label>check-in Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    dates[0]?.startDate,
                    "MM/dd/yyyy"  
                  )} to ${format(dates[0]?.endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDates([item.selection])}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )}
                </div>
                <div className="lsItem1">
                  <label>Options</label>
                  <div className="listitems">
                    <div className="listOptionItem">
                      <span className="lsOptionText">
                        Min Price <small>per nighr</small>
                      </span>
                      <input type="number" onClick={e=> setMin(e.target.value)} className="isOptioninput" />
                    </div>
                    <div className="listOptionItem">
                      <span className="lsOptionText">
                        Max Price <small>per nighr</small>
                      </span>
                      <input type="number" onClick={e=> setMax(e.target.value)} className="isOptioninput" />
                    </div>
                    <div className="listOptionItem">
                      <span className="lsOptionText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="isOptioninput"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="listOptionItem">
                      <span className="lsOptionText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="isOptioninput"
                        placeholder={options.children}
                      />
                    </div>
                    <div className="listOptionItem">
                      <span className="lsOptionText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="isOptioninput"
                        placeholder={options.room}
                      />
                    </div>
                  </div>
                </div>
                <button className="search" onClick={handelClick}>Search</button>
              </div>
              <div className="listResult">
                {loading ? (
                  "Loading"
                ) : (
                  <>
                    {data.map((item) => (
                      <Searchlist item={item} key={item._id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Data Not Fount</h1>
      )}
    </div>
  );
};

export default List;
