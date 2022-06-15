/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./index.css";
import { Image, Button } from "semantic-ui-react";
import stores from "../../bobs.json";
import ImageSlider from "../ImageSlider";

const width = "100%", height = 500;
const STORAGE_URL = "";
// const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

const EStore = ({ data, closeModal, setClose }:any) => {
  const cAD = data - 1;
  const s = stores[cAD];
  // console.log("respo-->", s, data, cAD);
  const bio = s?.business_bio || "";
  const bLogo = `/assets/${data}/logo.png`;
  const imgs = [
    `${STORAGE_URL}/assets/${data}/1.png`,
    `${STORAGE_URL}/assets/${data}/2.png`,
    `${STORAGE_URL}/assets/${data}/3.png`,
  ];
  let url = s?.business_url;
  const openBUrl = () => {
    if (!url.includes("https://") && !url.includes("http://")) {
      url = "https://" + s?.business_url;
    }
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
  };

  if (s?.type === "direct"){
    return ( 
      <>
        <span className="store-close-btn" onClick={closeModal}>X</span>
        <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
      </>
    )
  }

  return (
    <div className="store-body-view">
        <div className="flex-row-container">
            <div className="flex-row-item-1">
                <div className="store-images-scroll">
                    {imgs.map((im, i) => {
                        return (
                        <div key={i}>
                            <img src={im} className="small-Image" alt={`${i}-view`} />
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex-row-item-2">
                <ImageSlider images={imgs} className="store-image-slider" />
            </div>
            <div className="flex-row-item-3">
                <Image src={bLogo} size="small" className="store-logo-img"/>
                <p className="store-business-name">{s?.business_name}</p>
                <p className="store-product-description">Details and Product Description</p>
                <p className="store-product-content">{bio?.substring(0, 400)}...</p>
                <div className="store-product-button">
                    <Button className="store-btn curved" onClick={openBUrl}>Shop Now</Button>
                </div>
            </div>
            <span className="store-close-btn" onClick={closeModal}>
                {/* <FontAwesomeIcon icon={faClose} /> */} X
            </span>
        </div>
    </div>
  );
};


export default EStore;
