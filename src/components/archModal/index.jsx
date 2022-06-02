/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./index.css";
// import SimpleImageSlider from "react-simple-image-slider";
import { Grid, Image, Container, Button } from "semantic-ui-react";
import fords from "../../fords.json";
import ImageSlider from "../ImageSlider";

const width = "100%", height = 500;

const EStore = ({ data, closeModal }) => {
  const cAD = data - 1;
  const s = fords[cAD];
  // console.log("respo-->", s, data, cAD);
  const bio = s?.description || "";
  const bLogo = `/assets/${data}/logo.png`;
  let url = s?.link;
  const openBUrl = () => {
    if (!url.includes("https://") && !url.includes("http://")) {
      url = "https://" + s?.business_url;
    }
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
  };

  return (
    <div className="ford-body">
      <div className="ford-container">
        <Grid columns={3}>
          <Grid.Row className="ford-row">
            <Grid.Column width={14} className="content text-center">
              <Image src={bLogo} size="small" className="logo-img"/>
              <p className="content-title">{s?.title}</p>
              <p className="content-description">{bio?.substring(0, 400)}...</p>
              <div className="content-button">
                <Button className="custom-btn curved mt-10" onClick={openBUrl}>
                  Sign Up
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={1} className={"nopadding close-btn-pd"}>
              <span className="close-btn" onClick={closeModal}>
                X
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default EStore;
