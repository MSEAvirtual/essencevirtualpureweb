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
import LoaderChartView from "./components/loader";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button } from 'semantic-ui-react'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [allowClose, setAllowClose] = useState(false);
    const [component, setComponent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalname, setModalName] = useState("auth");

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
            setModalView(<AuthModal setAuth={AuthFuc} />, "auth")
        }
    };

    useEffect(() => {
        // AuthInitate();
        // if (isMo) window.scrollTo(0, document.body.scrollHeight);
    }, []);

    const setModalView = (component: any, name:string, close = false) => {
        setComponent(component);
        setShowModal(true);
        setAllowClose(close);
        setModalName(name)
    };

    const setEcomModalView = (id: any, type: string, data: any, resumFuc: func) => {
        let name = "estore";
        // console.log(id, type, data)
        let comp = <EStore data={id} closeModal={() => {
            closeModal();
            resumFuc();
        }} setClose={setAllowClose} />
        if (type !== "bob") {
            name = "ford";
            comp = <FordPopUp data={type} company={data.companyname} closeModal={() => {
                closeModal();
                resumFuc();
            }} setClose={setAllowClose} />
        } else {
        }
        setModalView(comp, name);
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
                <Button onClick={()=>setModalView(<ARModalPopUp />, "ar", true)}>Show AR Link</Button>
                <Button onClick={()=>setModalView(<FordPopUp data={"ford-3"} company={"ford"} closeModal={closeModal} setClose={setAllowClose} />, "ford")}>Shop CTA 1</Button>
                <Button onClick={()=>setModalView(<EStore data={"20"} closeModal={closeModal} setClose={setAllowClose} />, "estore")}>Shop CTA 1</Button>
                <PureWeb ShowEModal={setEcomModalView} />
            </div>
            <ModalLayout Component={component} show={showModal} setOpen={setShowModal} allowClose={allowClose} modalName={modalname} />
        </div>
    )
}

export default App;