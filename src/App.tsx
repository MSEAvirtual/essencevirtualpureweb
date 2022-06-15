// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./App.css";
import StreamApp from "./stream";
import EStore from "./components/storeView";
import FordPopUp from "./components/fordpopup";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";
// import ARModalPopUp from "./components/modals/ARmodalPopUp";
// import { Button } from 'semantic-ui-react'
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
    }, []);

    const setModalView = (component: any, name:string, close = false) => {
        setComponent(component);
        setShowModal(true);
        setModalName(name)
    };

    const setEcomModalView = (id: any, type: string, data: any, resumFuc: any) => {
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
    };

    return (
        <>
            <RotateScreen />
            <div id="view">
                <div className="nav-bar">
                    <img src="/site-logo.png" className="siteLogo" alt="site-logo" />
                </div>
                <StreamApp ShowEModal={setEcomModalView} /> 
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} modalname={modalname}>{component}</Modal>
        </>
    )
}

export default App;