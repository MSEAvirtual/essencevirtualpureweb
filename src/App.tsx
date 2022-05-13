/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ModalLayout from "./components/modals";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button, Grid } from 'semantic-ui-react'
import EStore from "./components/e-store";
import "./App.css"
import PureWeb from "./pureweb";
import RoundButton from "./components/button";
import AuthModal from "./components/modals/AuthModal";

const CUSTOM_MODAL_WIDTH = "1000px";
const App = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [width, setWidth] = useState(CUSTOM_MODAL_WIDTH);
    const [allowClose, setAllowClose] = React.useState(true);
    const [component, setComponent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const AuthFuc = ()=>{
        setLoggedIn(true);
        setWidth(CUSTOM_MODAL_WIDTH)
        setComponent(null);
        setShowModal(false);
    }
    useEffect(()=>{
        if (!loggedIn){
            setAllowClose(false);
            setWidth("400px")
            setModalView(<AuthModal setAuth={AuthFuc} />)
        }
    }, []);

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
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal} allowClose={allowClose} width={width}/>
        </>
    )
}

export default App;