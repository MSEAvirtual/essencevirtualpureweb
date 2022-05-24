/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ModalLayout from "./components/modals";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button, Grid } from 'semantic-ui-react'
import EStore from "./components/e-store";
import 'react-slidy/lib/index.scss'
import "./App.css"
import PureWeb from "./pureweb";
import RoundButton from "./components/button";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";

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
    const AuthInitate = () => {
        setModalView(null);
        if (!loggedIn){
            const isMobile= /Mobi|Android/i.test(navigator.userAgent);
            const Orent = !["landscape-primary", "landscape-secondary"].includes(window.screen.orientation.type);
            console.log("ready--->", window.screen.orientation.type, isMobile, Orent, window.matchMedia("(orientation: landscape)").matches);
            if (isMobile && Orent){
                setModalView(<RotateScreen />)
            } else {
                setAllowClose(false);
                if (!isMobile){
                  setWidth("400px")
                }
                setModalView(<AuthModal setAuth={AuthFuc} />)
                // screen.orientation.lock("landscape-primary")
            }
        }
    };

    useEffect(()=>{
        AuthInitate();
    }, []);

    window.addEventListener('orientationchange', (fogh) => {
        console.log("here", fogh);
        return AuthInitate();
    });

    const setModalView = (component:any, close = false) => {
        setComponent(component);
        setShowModal(true);
        setAllowClose(close);
    }
    return (
        <div className="webContent">
            <div id="container">
            <Button onClick={()=>setModalView(<ARModalPopUp />, true)}>Show AR Link</Button>
            <Button onClick={()=>setModalView(<EStore data={18} closeModal={closeModal} />)}>Shop CTA 1</Button>
            <Button onClick={()=>setModalView(<EStore data={2} closeModal={closeModal} />)}>Shop CTA 2</Button>
            <Button onClick={()=>setModalView(<EStore data={15} closeModal={closeModal} />)}>Shop CTA 3</Button>
            <Button onClick={()=>setModalView(<EStore data={17} closeModal={closeModal} />)}>Shop CTA 4</Button>
            <Button onClick={()=>setModalView(<EStore data={5} closeModal={closeModal} />)}>Shop CTA 5</Button>
             <PureWeb />
            <div className="bottomButtons">
                <RoundButton label="Music On/off"/>
                <RoundButton label="Event Schedule"/>
                <RoundButton label="How to Guide"/>
            </div>
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal} allowClose={allowClose} width={width}/>
            </div>
        </div>
    )
}

export default App;