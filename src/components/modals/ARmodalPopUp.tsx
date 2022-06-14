
import React from "react"

const ARURL = process.env.REACT_APP_AR_URL;
const width = "100%", height = "100%";

const ARModalPopUp = () => {
    return (
        <div style={{
            width, height
        }} dangerouslySetInnerHTML={{ __html: `<iframe src=${ARURL} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
        // <>Hello</>
    )
}

export default ARModalPopUp;