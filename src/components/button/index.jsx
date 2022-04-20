import React from "react";
import "./index.css"
import SimpleImageSlider from "react-simple-image-slider";
import { Grid, Image, Container, Button  } from 'semantic-ui-react'

const RoundButton = ({size=100, label}) => {
    return(
        <>
            <div className="roundedButton" >
                <p className="roundText">{label}</p>
            </div>
        </>
    )
};

export default RoundButton;