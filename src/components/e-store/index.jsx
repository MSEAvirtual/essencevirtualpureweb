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

const EStore = ({ data }) => {
    const s = stores[data];
    const bio = s["Business Bio:"];
    const imgs = [
        s['Image 1 Upload:'],
        s['Image 2 Upload:'],
        s['Image 3 Upload:'],
    ]
    let url = s["Business URL:"];
    const openBUrl = () => {
        if (!url.includes("https://") && !url.includes("http://")) {
            url = "https://" + s["Business URL:"];
        }
        let a= document.createElement('a');
        a.target= '_blank';
        a.href= url;
        a.click();
    }

    return(
        <div style={{margin:"1em" }}>
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={2} className={"nopadding"}>
                           {imgs.map((im, i)=>{
                               return(
                                <>
                                    <Image key={i} src={im} size='small' />
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
                                    images={imgs}
                                    showBullets={false}
                                    showNavs={true}
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6} className={"nopadding"}>
                            <p style={{ fontSize: "20px"}}>{s["Legal Business Vendor Name:"]}</p>
                            <p style={{ fontSize: "20px"}}>$89.99</p>
                            <p>Details and Production description</p>
                            <p style={{ fontSize: ".8rem"}}>{bio}</p>
                            <div style={{ marginTop: "10em" }}>
                                <Button primary className="curved mt-10" onClick={openBUrl}>Shop Now</Button>
                            </div>                            
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Image src={s['Business Logo Upload:']} size='small' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
};

const EStored = ({ data }) => {
    const s = stores[data];
    let url = s["Business URL:"];
    console.log("url-->", url)
    if (!url.includes("https://") && !url.includes("http://")) {
        url = "https://" + s["Business URL:"];
    }
    return(
        <div dangerouslySetInnerHTML={{ __html: `<object type="text/html" data=${url} width="${width}" height="${height}" target="_parent" allow="camera *;microphone *" />`}} />
        // <div dangerouslySetInnerHTML={{ __html: `<iframe src=${url} width="${width}" height="${height}" target="_parent" allow="camera *;microphone *" />`}} />
    )
}
export default EStore;
