import React, { useCallback, useEffect } from "react";
import "./propertyList.css";
import useFetch from "../hooks/useFetch.js";
import useEmblaCarousel from "embla-carousel-react";

const options = { align: "start", containScroll: "trim", loop: true };

function PropertyList() {
  const { data, loading, error } = useFetch(
    "https://hotel-management-api.vercel.app/api/hotels/countByType"
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [data, emblaApi]);

  const images = ["hotel", "appartments", "resort", "villa", "snow"];

  return (
    <div className="pList" style={{ marginTop: "-20px" }}>
      {loading ? (
        "Loading"
      ) : (
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images?.map((img, index) => {
              const matchingData = data.find((item) => item.type === img);
              return (
                <div key={index} className="embla__slide pListItem">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyList;
