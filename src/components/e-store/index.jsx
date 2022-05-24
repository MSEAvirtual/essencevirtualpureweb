/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./index.css";
// import SimpleImageSlider from "react-simple-image-slider";
import { Grid, Image, Container, Button } from "semantic-ui-react";
import stores from "../../stor.json";
import ImageSlider from "../ImageSlider";

const width = "100%",
  height = 500;
// const imgU = "https://react.semantic-ui.com/images/wireframe/image.png";

const EStore = ({ data, closeModal }) => {
  const s = stores[data];
  const bio = s.business_bio;
  const imgs = s.images;
  let url = s.business_url;
  const openBUrl = () => {
    if (!url.includes("https://") && !url.includes("http://")) {
      url = "https://" + s.business_url;
    }
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
  };

  return (
    <div className="store-body">
      <div className="store-container">
        <Grid columns={3}>
          <Grid.Row className="store-row">
            <Grid.Column width={2} className={"scrollImages nopadding"}>
              {imgs.map((im, i) => {
                return (
                  <div key={i}>
                    <Image src={im} size="small" className="small-Image" />
                    <br />
                  </div>
                );
              })}
            </Grid.Column>
            <Grid.Column width={8} className={"nopadding"}>
                <ImageSlider images={imgs} className="image-slider" />
            </Grid.Column>
            <Grid.Column width={5} className="content">
              <Image src={s?.business_logo} size="small" />
              <p className="b-name">{s?.business_name}</p>
              <p className="details-title">Details and Product Description</p>
              <p className="details-content">{bio.substring(0, 400)}...</p>
              <div className="buttonBellow">
                <Button className="custom-btn curved mt-10" onClick={openBUrl}>
                  Shop Now
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={1}>
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

const EStored = ({ data }) => {
  const s = stores[data];
  let url = s["Business URL:"];
  console.log("url-->", url);
  if (!url.includes("https://") && !url.includes("http://")) {
    url = "https://" + s["Business URL:"];
  }
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<object type="text/html" data=${url} width="${width}" height="${height}" target="_parent" allow="camera *;microphone *" />`,
      }}
    />
    // <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}" target="_parent" allow="camera *;microphone *" />`}} />
  );
};
export default EStore;