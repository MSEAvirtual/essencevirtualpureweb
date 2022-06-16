// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import StreamApp from "./stream";
import EStore from "./components/storeView";
import FordPopUp from "./components/fordpopup";
import AuthModal from "./components/modals/AuthModal";
import RotateScreen from "./components/modals/rotate";
// import ARModalPopUp from "./components/modals/ARmodalPopUp";
// import { Button } from 'semantic-ui-react'
import Modal from "./components/custom-modal";
import stores from "./bobs.json";
import sponsorData from "./others.json";
const STORAGE_URL = "";

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
        AuthInitate();
    }, []);

    const setModalView = (component: any, name: string, close = false) => {
        setComponent(component);
        setShowModal(true);
        setModalName(name)
    };

    const openBUrl = (url) => {
        if (!url.includes("https://") && !url.includes("http://")) {
            url = "https://" + s?.business_url;
        }
        let a = document.createElement("a");
        a.target = "_blank";
        a.href = url;
        a.click();
    };

    const HandleBoBPopUps = (id: any, type: string, data: any, resumFuc: func) => {
        const cAD = id - 1;
        const s = stores[cAD];
        const url = s?.business_url;
        // console.log(id, type, data, s)
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc && resumFuc();
        } else {
            const comp = <EStore storeData={s} data={id} closeModal={() => {
                closeModal();
                resumFuc();
            }} setClose={setAllowClose} />
            setModalView(comp, "estore");
        }
    }

    const HandleFordPopUps = (id: any, type: string, data: any, resumFuc: func) => {
        const cAD = type;
        const fData = data.companyname ? sponsorData[data.companyname] : {};
        // find by cta id
        const rData = fData ? fData.filter((f) => f["cta_id"] === cAD) : [];
        const s = rData.length > 0 ? rData[0] : {};
        let url = s?.url;
        if (s && s.type === "direct") {
            openBUrl(url);
            closeModal();
            resumFuc && resumFuc();
        } else {
            const comp = <FordPopUp storeData={s} data={type} company={data.companyname} closeModal={() => {
                closeModal();
                resumFuc();
            }} setClose={setAllowClose} />
            setModalView(comp, "ford");
        }
    }

    const setEcomModalView = (id: any, type: string, data: any, resumFuc: any) => {
        if (type === "bob") {
            return HandleBoBPopUps(id, type, data, resumFuc);
        } else if (type !== "bob") {
            return HandleFordPopUps(id, type, data, resumFuc);
        }
        // {"companyid":"1","content":"ford-1","style":"0","companyname":"ford"}
    };

    return (
        <>
            <RotateScreen />
            <div id="view">
                <div className="nav-bar">
                    <img src="/site-logo.png" className="siteLogo" alt="site-logo" />
                </div>
                <StreamApp ShowEModal={setEcomModalView} /> 
                {/* <Button onClick={() => setEcomModalView(1, "ford-1", {"companyid":"1","content":"ford-1","style":"0","companyname":"ford"})}>Open CTA</Button> */}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} modalname={modalname}>{component}</Modal>
        </>
    )
}

export default App;