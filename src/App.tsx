/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useState } from "react";
import EStore from "./components/storeView";
import FordPopUp from "./components/fordpopup";
import 'react-slidy/lib/index.scss'
import "./App.css"
import PureWeb from "./pureweb";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";
import ARModalPopUp from "./components/modals/ARmodalPopUp";
import { Button } from 'semantic-ui-react'
import Modal from "./components/custom-modal";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [allowClose, setAllowClose] = useState(false);
    const [component, setComponent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalname, setModalName] = useState("auth");

    const AuthFuc = () => {
        setLoggedIn(true);
        closeModal();
    };

    const closeModal = () => {
        setComponent(null);
        setShowModal(false);
    };

    const AuthInitate = () => {
        if (!loggedIn) {
            setModalView(<AuthModal setAuth={AuthFuc} />, "auth")
        }
    };

    useEffect(() => {
        // AuthInitate();
        /* iOS re-orientation fix */
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
            console.log("scrolling....")
            /* iOS hides Safari address bar */
            window.addEventListener("load",function() {
                setTimeout(function() {
                    window.scrollTo(0, document.body.scrollHeight);
                }, 1000);
            });
        }
    }, []);

    const setModalView = (component: any, name:string, close = false) => {
        setComponent(component);
        setShowModal(true);
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
                {/* <Button onClick={()=>setModalView(<ARModalPopUp />, "ar", true)}>Show AR Link</Button>
                <Button onClick={()=>setModalView(<FordPopUp data={"ford-3"} company={"ford"} closeModal={closeModal} setClose={setAllowClose} />, "ford")}>Shop CTA 1</Button>
                <Button onClick={()=>setModalView(<EStore data={"20"} closeModal={closeModal} setClose={setAllowClose} />, "estore")}>Shop CTA 1</Button> */}
                <PureWeb ShowEModal={setEcomModalView} />
                
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Button onClick={()=>setModalView(<EStore data={"20"} closeModal={closeModal} setClose={setAllowClose} />, "estore")}>Shop CTA 1</Button>
                </div> */}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} modalname={modalname}>{component}</Modal>
        </div>
    )
}

export default App;