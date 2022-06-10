/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import ModalLayout from "./components/modals";
import EStore from "./components/e-store";
import FordPopUp from "./components/fordpopup";
import 'react-slidy/lib/index.scss'
import "./App.css"
import PureWeb from "./pureweb";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";
// import LoaderChartView from "./components/loader";
// import ARModalPopUp from "./components/modals/ARmodalPopUp";
// import { Button, Grid } from 'semantic-ui-react'

const CUSTOM_MODAL_WIDTH = "1000px";
const CUSTOM_SPONSOR_WIDTH = "800px";

const App = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [width, setWidth] = useState(CUSTOM_MODAL_WIDTH);
    const [allowClose, setAllowClose] = React.useState(false);
    const [component, setComponent] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const AuthFuc = () => {
        setLoggedIn(true);
        setWidth(CUSTOM_MODAL_WIDTH)
        closeModal();
    };

    const closeModal = () => {
        setComponent(null);
        setShowModal(false);
    };

    const AuthInitate = () => {
        if (!loggedIn) {
            setAllowClose(false);
            setWidth("400px")
            setModalView(<AuthModal setAuth={AuthFuc} />)
        }
    };

    useEffect(() => {
        // AuthInitate();
        // if (isMo) window.scrollTo(0, document.body.scrollHeight);
    }, []);

    const setModalView = (component: any, close = false) => {
        setComponent(component);
        setShowModal(true);
        setAllowClose(close);
    };

    const setEcomModalView = (id: any, type: string, data: any, resumFuc: func) => {
        // console.log(id, type, data)
        let comp = <EStore data={id} closeModal={() => {
            closeModal();
            resumFuc();
        }} setClose={setAllowClose} />
        if (type !== "bob") {
            setWidth(CUSTOM_SPONSOR_WIDTH)
            comp = <FordPopUp data={type} company={data.companyname} closeModal={() => {
                closeModal();
                resumFuc();
            }} setClose={setAllowClose} />
        } else {
            setWidth(CUSTOM_MODAL_WIDTH)
        }
        setModalView(comp);
    }

    return (
        <div className="container">
            <div id="notification">
                <RotateScreen />
            </div>
            <div id="view">
                <div className="nav-bar">
                    <img src="/site-logo.png" className="siteLogo" alt="site-logo" />
                </div>
                {/* <Button onClick={()=>setModalView(<ARModalPopUp />, true)}>Show AR Link</Button>
                <Button onClick={()=>setModalView(<FordPopUp data={"ford-4"} company={"ford"} closeModal={closeModal} setClose={setAllowClose} />)}>Shop CTA 1</Button>
                <Button onClick={()=>setModalView(<EStore data={"20"} closeModal={closeModal} setClose={setAllowClose} />)}>Shop CTA 1</Button> */}
                <PureWeb ShowEModal={setEcomModalView} />
                {/* <LoaderChartView  msg={<h2>Loading...</h2>}/> */}
            </div>
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal} allowClose={allowClose} width={width} />
        </div>
    )
}

export default App;