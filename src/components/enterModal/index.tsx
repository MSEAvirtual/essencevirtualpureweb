/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { isMobileTablet } from "../../utils";
import "./index.css";
// import videoFile from "../../introVideo.mp4";

const EnteModalView = ({ storeData, data, closeModal, setClose }: any) => {
  const [showMap, setShowMap] = useState(false);
  const isMobile = isMobileTablet();

  const handleVideoEnded = () => setShowMap(true);

  const RenderVideoDesktop = () => {
    return (
      <>
        <video className="intro-video" autoPlay onEnded={handleVideoEnded}>
          <source src="/introVideo.mp4" type="video/mp4" />
        </video>
      </>
    )
  }

  const RenderIntro = () => {
    // return (
    //   <div className="intro-div">
    //     <img src="/loadinglogo.png" className="introLogo" alt="intro-logo" />
    //     <h1 className="title-first">WELCOME TO THE VIRTUAL MARKETPLACE 2022!</h1>
    //     <p className="text-first text-inline">Use these <img src="/button.png" alt="td-op" /> to navigate through the marketplace.</p>
    //     <p className="text-first text-inline">Press <img src="/menu.png" alt="td-op" /> to access the menu.</p>
    //     <div className="tm text-inline">
    //       <img src="/shop.png" alt="td-op" />SHOP <img className="ml-2" src="/question.png" alt="td-op" /> LEARN <img className="ml-2" src="/video.png" alt="td-op" /> WATCH
    //     </div>
    //     <p className="text-first strong">Over 28 Black Owned Businesses!</p>
    //     <div className="intro-button">
    //       <Button className="store-btn" onClick={() => setShowMap(true)}>View Map <br /> Start Your Visit</Button>
    //     </div>
    //   </div>
    // )
    return (<div className="intro-image" style={{ backgroundImage: `url("/intro-mobile.png")`}}>
      <button className="intro-button" onClick={() => setShowMap(true)} />
    </div>)
  }

  const RenderMap = () => {
    // return (<img className="map-image" src={isMobile ? "/map-mobile.png" : "/map-desktop.png"} alt="map-im" />)
    return (<div className="map-image" style={{ background: `url(${isMobile ? "map-mobile.png" : "map-desktop.png"})` }}>
      <button className="map-button" onClick={closeModal} />
    </div>)
  }

  return (
    <div className={"store-body-m-view"}>
      <div className={`flex-row-m-container ${showMap ? "p-0" : ""}`}>
        {!showMap ? !isMobile ? RenderVideoDesktop() : RenderIntro() : RenderMap()}
        {/* <span className="store-close-btn" onClick={closeModal}>X</span> */}
      </div>
    </div>
  );
};


export default EnteModalView;
