import React from "react";
import "./index.css"
import SimpleImageSlider from "react-simple-image-slider";
import { Grid, Image, Container, Button  } from 'semantic-ui-react'
import stores from "../../stor.json";

const width = "100%", height = 500;
// const imgU = "https://react.semantic-ui.com/images/wireframe/image.png";

const EStore = ({ data }) => {
    const s = stores[data];
    const bio = s.business_bio;
    const imgs = s.images;
    let url = s.business_url;
    const openBUrl = () => {
        if (!url.includes("https://") && !url.includes("http://")) {
            url = "https://" + s.business_url;
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
                    <Grid.Row style={{padding:"2em 1em 1em"}}>
                        <Grid.Column width={2} className={"scrollImages nopadding"}>
                           {imgs.map((im, i)=>{
                               return(
                                <div key={i}>
                                    <Image src={im} size='small'/>
                                    <br/>
                                </div>
                               )
                           }) }
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
                        <Grid.Column width={6} style={{padding: "2em"}}>
                            <p style={{ fontSize: "20px"}}>{s?.business_name}</p>
                            <p style={{ paddingTop: "1em",fontSize: "20px"}}>$89.99</p>
                            <p>Details and Product Description</p>
                            <p style={{ fontSize: ".8rem"}}>{bio.substring(0, 800)}...</p>
                            <div style={{ marginTop: "2em" }}>
                                <Button primary className="curved mt-10" onClick={openBUrl}>Shop Now</Button>
                            </div>                            
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Image src={s?.business_logo} size='small' />
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
