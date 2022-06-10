import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";


const ImageSlider = ({ images, className }:any) => { 
    console.log("img--->", images);
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
  
    const slideRight = () => {
      setIndex((index + 1) % images.length); // increases index by 1
    };
  
    const slideLeft = () => {
      const nextIndex = index - 1;
      if (nextIndex < 0) {
        setIndex(images.length - 1); // returns last index of images array if index is less than 0
      } else {
        setIndex(nextIndex);
      }
    };
  
    return (
      images.length > 0 ? (
        <div className={"img-slider-component " + className}>
          <button className="img-slider-nav left" onClick={slideLeft}>
            <FontAwesomeIcon icon={faChevronLeft} color="#fff"/>
          </button>
          <div className="image-slider-image" style={{backgroundImage: `url(${images[index]})`}} />
          <button className="img-slider-nav right" onClick={slideRight}>
            <FontAwesomeIcon icon={faChevronRight} color="#fff"/>
          </button>
        </div>
      ) : <></>
    );
};

export default ImageSlider;
