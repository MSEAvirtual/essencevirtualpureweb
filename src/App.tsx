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
    const [allowClose, setAllowClose] = React.useState(false);
    const [component, setComponent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const AuthFuc = ()=>{
        setLoggedIn(true);
        setWidth(CUSTOM_MODAL_WIDTH)
        closeModal();
    };
    const closeModal = () => {
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

    const setModalView = (component:any, close = false) => {
        setComponent(component);
        setShowModal(true);
        setAllowClose(close);
    }
    return (
        <>
            <Button onClick={()=>setModalView(<ARModalPopUp />, true)}>Show AR Link</Button>
            <Button onClick={()=>setModalView(<EStore data={18} closeModal={closeModal} />)}>Shop CTA 1</Button>
            <Button onClick={()=>setModalView(<EStore data={2} closeModal={closeModal} />)}>Shop CTA 2</Button>
            <Button onClick={()=>setModalView(<EStore data={15} closeModal={closeModal} />)}>Shop CTA 3</Button>
            <Button onClick={()=>setModalView(<EStore data={17} closeModal={closeModal} />)}>Shop CTA 4</Button>
            <Button onClick={()=>setModalView(<EStore data={5} closeModal={closeModal} />)}>Shop CTA 5</Button>
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