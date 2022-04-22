import React from "react";
import ModalLayout from "./components/modals";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button, Grid } from 'semantic-ui-react'
import EStore from "./components/e-store";
import "./App.css"
import PureWeb from "./pureweb";
import RoundButton from "./components/button";

const App = () => {
    const [component, setComponent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const setModalView = (component:any) => {
        setComponent(component);
        setShowModal(true);
    }
    return (
        <>
            <Button onClick={()=>setModalView(<ARModalPopUp />)}>Show AR Link</Button>
            <Button onClick={()=>setModalView(<EStore data={18}/>)}>Shop CTA 1</Button>
            <Button onClick={()=>setModalView(<EStore data={2} />)}>Shop CTA 2</Button>
            <Button onClick={()=>setModalView(<EStore data={15} />)}>Shop CTA 3</Button>
            <Button onClick={()=>setModalView(<EStore data={17} />)}>Shop CTA 4</Button>
            <Button onClick={()=>setModalView(<EStore data={5} />)}>Shop CTA 5</Button>
            <PureWeb />
            <Grid>
                <Grid.Row columns={3} className="bottomButtons">
                    <RoundButton label="Music On/off"/>
                    <RoundButton label="Event Schedule"/>
                    <RoundButton label="How to Guide"/>
                </Grid.Row>
            </Grid>
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal}/>
        </>
    )
}

export default App;