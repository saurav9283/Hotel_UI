import React, { useContext, useState } from "react";
import "./Reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { searchContext } from "../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch(
    `https://hotel-management-api.vercel.app/api/hotels/room/${hotelId}`
  );
  // const { data, loading, error } = useFetch(
  //   `http://localhost:9000/api/hotels/room/${hotelId}`
  // );

  const { dates } = useContext(searchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const list = [];

    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) => {
      return allDates.includes(new Date(date).getTime());
    });

    return !isFound;
  };

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomSelected, setRoomSelected] = useState(false); // Track if a room is selected

  const handleSelect = (roomNumberId) => {
    setSelectedRooms((prevSelectedRooms) => {
      if (prevSelectedRooms.includes(roomNumberId)) {
        return prevSelectedRooms.filter((item) => item !== roomNumberId);
      } else {
        return [...prevSelectedRooms, roomNumberId];
      }
    });
    setRoomSelected(true); // A room is selected, disable other checkboxes
  };

  const handleReserve = async () => {
    try {
       await Promise.all(
        selectedRooms?.map((roomId) => {
          // const res =  axios.put(`http://localhost:9000/api/rooms/availability/${roomId}`, {
          const res =  axios.put(`https://hotel-management-api.vercel.app/api/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
        );
        setOpen(false)
        navigate("/")
        // console.log(a)
    } catch (error) {
      console.log(error);
    }
    setSelectedRooms([]);
    setRoomSelected(false); // Reset to allow selecting rooms again
  };

  return (
    <div className="reserve">
      <div className="rcontainer">
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="rclose"
          onClick={() => setOpen(false)}
        />
        <span>Select your Rooms:</span>
        {data?.map((item) => (
          <div className="ritem" key={item._id}>
            <div className="rinfo">
              <div className="rtitle">{item?.title}</div>
              <div className="rdesc">{item?.desc}</div>
              <div className="rmax">
                Max People: <b>{item?.maxPeople}</b>
              </div>
              <div className="rprice">{item?.price}</div>
            </div>
            <div className="rselectroom">
              {item?.roomNumbers?.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber?.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    disabled={roomSelected || !isAvailable(roomNumber)}
                    onChange={() => handleSelect(roomNumber._id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserve} className="rbutton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
