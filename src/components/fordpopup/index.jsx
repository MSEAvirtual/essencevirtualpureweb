/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import "./index.css";
import { Grid, Image, Button } from "semantic-ui-react";
import sponsorData from "../../others.json";

const width = "100%", height = 500;

const SponorPopUp = ({ data, company, closeModal, setClose }) => {
  const cAD = data;
  const fData = sponsorData[company];
  // find by cta id
  const rData = fData ? fData.filter((f) => f["cta_id"] === cAD) : [];
  const s = rData.length > 0 ? rData[0] : {};
  console.log("suppress--->", s);
  const type = s?.type || 1;
  const bio = s?.description || "";
  const bLogo = s?.image;
  let url = s?.url;
  
  const openBUrl = () => {
    if (!url.includes("https://") && !url.includes("http://")) {
      url = "https://" + s?.url;
    }
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
  };

  if (s?.type === "target"){
    setClose(true);
    return ( 
      <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
    )
  }

  return (
    <div className={`ford-body ${type===2 ? "ford-color": "ex-color"}`}>
      <div className="ford-container">
        <div className="content text-center">
          <Image src={bLogo} size="small" className="logo-img" />
          <p className="content-title">{s?.title}</p>
          <div className={type===2 ? "content-description-ford" :"content-description"} dangerouslySetInnerHTML={{ __html: `<p className="content-description">${bio?.substring(0, 400)}</p>`}}/>
          <div className="content-button">
            <Button className={`custom-btn curved mt-10 ${type===2 ? "ford-color": "ex-color"}`} onClick={openBUrl}>
              {s["button-text"] || "sign up"}
            </Button>
          </div>
          <span className={`close-btn ${type===2? "ford-t-color": "ex-t-color"}`} onClick={closeModal}>
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default SponorPopUp;
