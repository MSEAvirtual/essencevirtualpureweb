/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useRef, useState } from "react";
import { isMobileTablet } from "../../utils";
import "./ar.css";

const ARURL = process.env.REACT_APP_AR_URL || "https://essencephotobooth.live/";

const ARModalPopUp = ({ closeModal }: any) => {
  const arView = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    setDimensions(calculateRatio());
  }, []);

  const calculateRatio = () => {
    if (arView && arView.current) {
      const windowRatio = window.innerWidth / window.innerHeight;
      const modalRatio =
        arView.current!.clientWidth / arView.current!.clientHeight;

      if (isMobileTablet()) {
        return { width: "100%", height: "100%" };
      } else {
        if (modalRatio < windowRatio) {
          return { width: "100%", height: arView.current.clientWidth + "px" };
        } else {
          return { width: arView.current.clientHeight + "px", height: "100%" };
        }
      }
    }

    return { width: "100%", height: "100%" };
  };

  return (
    <>
      <div id="rotate-view">
        <p className="rotate-mobile">
          Please Rotate Sceen to Potriat Mode to Use AR
        </p>
      </div>
      <div
        ref={arView}
        id="ar-view"
        style={{ width: "100%", height: "100%" }}
        dangerouslySetInnerHTML={{
          __html: `<iframe src=${ARURL} width="${dimensions.width}" height="${dimensions.height}" allow="camera *;microphone *" />`,
        }}
      />
      <span className="store-close-btn" onClick={closeModal}>
        X
      </span>
    </>
  );
};

export default ARModalPopUp;
