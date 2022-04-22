import React from "react";
import "./index.css"
import SimpleImageSlider from "react-simple-image-slider";
import { Grid, Image, Container, Button  } from 'semantic-ui-react'
import stores from "../../storej.json";

const images = [
    { url: "https://react.semantic-ui.com/images/wireframe/image.png" },
    { url: "https://react.semantic-ui.com/images/wireframe/image.png" },
    { url: "https://react.semantic-ui.com/images/wireframe/image.png" },
    { url: "https://react.semantic-ui.com/images/wireframe/image.png" },
];
const width = "100%", height = 500;

const EStored = ({ data }) => {
    const img = stores[data];
    console.log(img, img['Image 1 Upload:']);
    return(
        <div style={{margin:"1em" }}>
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={2} className={"nopadding"}>
                           {images.map((i)=>{
                               return(
                                <>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                                    <br/>
                                </>
                               )
                           }) }
                            {/* <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' /> */}
                        </Grid.Column>
                        <Grid.Column width={6} className={"nopadding"}>
                            <div style={{position: "relative"}}>
                                <SimpleImageSlider
                                    width={320}
                                    height={500}
                                    images={images}
                                    showBullets={false}
                                    showNavs={true}
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6} className={"nopadding"}>
                            <p style={{ fontSize: "20px"}}>{img["Legal Business Vendor Name:"]}</p>
                            <p style={{ fontSize: "20px"}}>$89.99</p>
                            <p>Details and Production description</p>
                            <p style={{ fontSize: ".8rem"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. 
                                Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div style={{ marginTop: "10em" }}>
                                <Button primary className="curved mt-10">Shop Now</Button>
                            </div>                            
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Image src={img['Image 1 Upload:']} size='small' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
};

const EStore = ({ data }) => {
    const s = stores[data];
    let url = s["Business URL:"];
    console.log(url, )
    if (!url.includes("https://") && !url.includes("http://")) {
        url = "https://" + s["Business URL:"];
    }
    return(
        <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}" target="_parent" allow="camera *;microphone *" />`}} />
    )
}
export default EStore;
