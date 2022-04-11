import React from "react"

const width = "100%", height = 500;

const EcommercePopUp = async ({ link }:any) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<iframe src=${link} width="${width}" height="${height}"  allow="camera *;microphone *" />`}} />
    )
}

export default EcommercePopUp;