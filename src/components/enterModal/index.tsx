/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./index.css";

const EnteModalView = ({ storeData, data, closeModal, setClose }: any) => {
  const [showMap, setShowMap] = useState(false);

  const RenderIntro = () => {
    return (
      <div className="intro-div">
        <img src="/loadinglogo.png" className="introLogo" alt="intro-logo" />
        <h1 className="title-first">WELCOME TO ESSENCE FEST OF CULTURE</h1>
        <pattern className="title-second">VIRTUAL MARKETPLACE 2022!</pattern>
        <p className="text-first text-inline">Use these <img src="/button.png" alt="td-op" /> to navigate through the marketplace.</p>
        <div className="tm text-inline">
          <img src="/shop.png" alt="td-op" />SHOP <img className="ml-2" src="/question.png" alt="td-op" /> LEARN <img className="ml-2" src="/video.png" alt="td-op" /> WATCH
        </div>
        <p className="text-first strong">Over 28 Black Owned Businesses!</p>
        <div className="intro-button">
          <Button className="store-btn" onClick={() => setShowMap(true)}>View Map <br /> Start Your Visit</Button>
        </div>
      </div>
    )
  }

  const RenderMap = () => {
    return (<img className="map-image" src="/map.jpg" alt="map-im" />)
  }

  return (
    <div className={"store-body-view"}>
      <div className={`flex-row-container ${showMap ? "p-0" : ""}`}>
        {!showMap ? RenderIntro() : RenderMap()}
        <span className="store-close-btn" onClick={closeModal}>X</span>
      </div>
    </div>
  );
};


export default EnteModalView;
