import React, { useState } from "react";
// import SimpleImageSlider from "react-simple-image-slider";
import "./index.css";

const ImageSlider = ({ images, className }) => { 
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
      images.length > 0 && (
        <div className={"img-slider-component " + className}>
          <button className="img-slider-nav left" onClick={slideLeft}>{"<"}</button>
          {/* <img className={className} src={images[index]} alt={index} /> */}
          <div className="image-slider-image" style={{backgroundImage: `url(${images[index]})`}} />
          <button className="img-slider-nav right" onClick={slideRight}>{">"}</button>
        </div>
        // <SimpleImageSlider 
        // width={}
        //     images={images}
        // />
      )
    );
};

export default ImageSlider;
