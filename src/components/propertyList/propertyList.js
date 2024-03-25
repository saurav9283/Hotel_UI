import React from "react";
import "./propertyList.css";
import useFetch from "../hooks/useFetch.js";

function PropertyList() {
  const { data, loading, error } = useFetch(
    // "http://localhost:8000/api/hotels/countByType"
    "https://hotel-management-api.vercel.app/api/hotels/countByType"
  );

  const images = ["hotel", "appartments", "resort", "villa", "snow"];

  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, index) => {
              const matchingData = data.find((item) => item.type === img);
              return (
                <div key={index} className="pListItem">
                  <img
                    src={require(`../images/${img}.jpeg`)}
                    alt={img}
                    className="pListImg"
                  />
                  <div className="pListTitle">
                    <h1>{img.charAt(0).toUpperCase() + img.slice(1)}</h1>
                    <h2>
                      {matchingData ? matchingData.count : 0}{" "}
                      {img.charAt(0).toUpperCase() + img.slice(1)}
                    </h2>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default PropertyList;
