import React, { useCallback } from "react";
import "./Featured.css";
import dubai from "../images/dubai.jpeg";
import mountain from "../images/mountain.jpeg";
import sea from "../images/sea.jpeg";
import useFetch from "../hooks/useFetch";
import useEmblaCarousel from "embla-carousel-react";

const options = { align: "start", containScroll: "trim", loop: true };

function Featured() {
  const { data, loading, error } = useFetch(
    // "http://localhost:8000/api/hotels/countByCity?cities=Jalandhar,barlin,london"
    "https://hotel-management-api.vercel.app/api/hotels/countByCity?cities=Jalandhar,barlin,london"
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const onPrevButtonClick = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const onNextButtonClick = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return (
    <div className="featured">
      {loading ? (
        "Loading please Wait"
      ) : (
        <div ref={emblaRef} className="embla">
          <div className="embla__container">
            {data?.map((count, index) => (
              <div className="embla__slide" key={index}>
                <div className="featuredItem">
                  <img
                    src={
                      index === 0 ? dubai : index === 1 ? mountain : sea
                    }
                    alt={index === 0 ? "dubai" : index === 1 ? "mountain" : "sea"}
                    className="featuredImg"
                  />
                  <div className="featuredTitles">
                    <h1>
                      {index === 0
                        ? "Jalandhar"
                        : index === 1
                        ? "Barlin"
                        : "London"}
                    </h1>
                    <h2>{count}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Featured;
