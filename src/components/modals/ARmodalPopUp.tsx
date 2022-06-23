/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react"
import "./ar.css"

const ARURL = process.env.REACT_APP_AR_URL || "https://theimmersivepath.8thwall.app/essence";
const width = "100%", height = "100%";

const ARModalPopUp = ({ closeModal }:any) => {
    return (
        <>
        <div id="rotate-view">
            <p className="rotate-mobile">Please Rotate Sceen to Potriat Mode to Use AR</p>
        </div>
        <div id="ar-view" style={{
            width, height
        }} dangerouslySetInnerHTML={{ __html: `<iframe src=${ARURL} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
        <span className="store-close-btn" onClick={closeModal}>X</span>
        </>
    )
}

export default ARModalPopUp;