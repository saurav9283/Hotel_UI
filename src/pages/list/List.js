import React, { useState } from "react";
import Header from "../../components/header/Header.js";
import Navbar from "../../components/navbar/Navbar.js";
import "./List.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Searchlist from "../../components/searchItem/Searchlist.js";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
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
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
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
                  <input type="number" className="isOptioninput" />
                </div>
                <div className="listOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per nighr</small>
                  </span>
                  <input type="number" className="isOptioninput" />
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
            <button className="search">Search</button>
          </div>
          <div className="listResult">
            <Searchlist/>
            <Searchlist/>
            <Searchlist/>
            <Searchlist/>
            <Searchlist/>
            <Searchlist/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
