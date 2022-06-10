/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./index.css";
import { Image, Button } from "semantic-ui-react";
import stores from "../../bobs.json";
import ImageSlider from "../ImageSlider";
import ModalLayout from "../modals";

const width = "100%", height = 500;
const STORAGE_URL = "";
// const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

const EStore = ({ data, closeModal, setClose }) => {
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
    setClose(true);
    return ( 
      <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
    )
  }

  return (
    <div className="store-body">
      <div className="store-container">
        <div className="store-row">
          <div className="store-items pl-lo">
          {imgs.map((im, i) => {
                return (
                  <div key={i}>
                    <Image src={im} className="small-Image" />
                  </div>
                );
              })}
          </div>
          <div className="store-items">
            <ImageSlider images={imgs} className="image-slider" />
          </div>
          <div className="store-items content-estore">
              <Image src={bLogo} size="small" className="logo-img-estore"/>
              <p className="b-name">{s?.business_name}</p>
              <p className="details-title-estore">Details and Product Description</p>
              <p className="details-content-estore">{bio?.substring(0, 400)}...</p>
              <div className="buttonBellow-estore">
                <Button className="custom-btn-estore curved mt-10" onClick={openBUrl}>
                  Shop Now
                </Button>
                
              </div>
          </div>
          <span className="close-btn-estore" onClick={closeModal}>X</span>
        </div>
        {/* <Grid columns={3}>
          <Grid.Row className="store-row">
            <Grid.Column width={2} className={"scrollImages nopadding"}>
              {imgs.map((im, i) => {
                return (
                  <div key={i}>
                    <Image src={im} size="small" className="small-Image" />
                  </div>
                );
              })}
            </Grid.Column>
            <Grid.Column width={8} className={"nopadding"}>
                <ImageSlider images={imgs} className="image-slider" />
            </Grid.Column>
            <Grid.Column width={5} className="content-estore">
              <Image src={bLogo} size="small" className="logo-img-estore"/>
              <p className="b-name">{s?.business_name}</p>
              <p className="details-title-estore">Details and Product Description</p>
              <p className="details-content-estore">{bio?.substring(0, 400)}...</p>
              <div className="buttonBellow-estore">
                <Button className="custom-btn-estore curved mt-10" onClick={openBUrl}>
                  Shop Now
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={1} className={"nopadding close-btn-pd-estore"}>
              <span className="close-btn-estore" onClick={closeModal}>
                X
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </div>
    </div>
  );
};


export default EStore;
