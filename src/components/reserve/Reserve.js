import React, { useContext, useState } from "react";
import "./Reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { searchContext } from "../context/searchContext";

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/hotels/room/${hotelId}`
  );

  const {dates} = useContext(searchContext);

  const getDatesInRange = (startDate , endDate) =>{
    const start = new Date(startDate);
    const end = new Date(endDate)
    const date = new Date(start.getTime());
    const list = []

    while(date <= end)
    {
      list.push(new Date(date))
      date.setDate(date.getDate()+1)
    }
    return list;
  };
  // console.log(getDatesInRange(dates[0]?.startDate, dates[0]?.endDate));   // Findin those date where this room going to bs booked
  const [selectedRooms, setSelectedRooms] = useState([]);

//   const handleSelect = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     setSelectedRooms(checked ? [...selectedRooms, value]  : selectedRooms.filter((item) => item !== value))
// };
// console.log(selectedRooms)

  const handleSelect = (roomNumberId) => {
    setSelectedRooms((prevSelectedRooms) => {
      if (prevSelectedRooms.includes(roomNumberId)) {
        return prevSelectedRooms.filter((item) => item !== roomNumberId);
      } else {
        return [...prevSelectedRooms, roomNumberId];
      }
    });
  };

  // console.log(selectedRooms);

  const handelclick =()=> {

  }

  return (
    <div className="reserve">
      <div className="rcontainer">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="rclose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Rooms:</span>
        {data.map((item) => (
          <div className="ritem" key={item._id}>
            <div className="riteminfo">
              <div className="rtitle">{item.title}</div>
              <div className="rdesc">{item.desc}</div>
              <div className="rmax">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="rprice">{item.price}</div>
            </div>
            {item?.roomNumbers?.map((roomNumber) => (
              <div className="room" key={roomNumber._id}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={() => handleSelect(roomNumber._id)}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handelclick} className="rbutton">Reserve Now!</button>
      </div>
    </div>
  );
};

export default Reserve;
